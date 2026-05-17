import * as path from 'node:path';
import {
	app,
	Menu,
	Tray,
	BrowserWindow,
	MenuItemConstructorOptions,
} from 'electron';
import config from './config';
import {toggleMenuBarMode} from './menu-bar-mode';

let tray: Tray | undefined;
let previousMessageCount = 0;

let contextMenu: Menu;

export default {
	create(win: BrowserWindow) {
		if (tray) {
			return;
		}

		function toggleWindow(): void {
			if (win.isVisible()) {
				win.hide();
			} else {
				if (config.get('lastWindowState').isMaximized) {
					win.maximize();
					win.focus();
				} else {
					win.show();
				}

				const alwaysOnTopMenuItem = Menu.getApplicationMenu()!.getMenuItemById('always-on-top')!;
				win.setAlwaysOnTop(alwaysOnTopMenuItem.checked);
			}
		}

		const trayMenuItems: MenuItemConstructorOptions[] = [
			{
				label: 'Disable Menu Bar Mode',
				click() {
					config.set('menuBarMode', false);
					toggleMenuBarMode(win);
				},
			},
			{
				label: 'Show Dock Icon',
				type: 'checkbox',
				checked: config.get('showDockIcon'),
				click(menuItem: Electron.MenuItem) {
					config.set('showDockIcon', menuItem.checked);

					if (menuItem.checked) {
						app.dock.show();
					} else {
						app.dock.hide();
					}

					const dockMenuItem = contextMenu.getMenuItemById('dockMenu')!;
					dockMenuItem.visible = !menuItem.checked;
				},
			},
			{
				type: 'separator',
			},
			{
				id: 'dockMenu',
				label: 'Menu',
				visible: !config.get('showDockIcon'),
				submenu: Menu.getApplicationMenu()!,
			},
			{
				type: 'separator',
			},
			{
				role: 'quit',
			},
		];

		contextMenu = Menu.buildFromTemplate(trayMenuItems);

		tray = new Tray(getIconPath(false));

		tray.setContextMenu(contextMenu);

		updateToolTip(0);

		const trayClickHandler = (): void => {
			if (!win.isFullScreen()) {
				toggleWindow();
			}
		};

		tray.on('click', trayClickHandler);
		tray.on('double-click', trayClickHandler);
		tray.on('right-click', () => {
			tray?.popUpContextMenu(contextMenu);
		});
	},

	destroy() {
		setTimeout(() => {
			tray?.destroy();
			tray = undefined;
		}, 500);
	},

	update(messageCount: number) {
		if (!tray || previousMessageCount === messageCount) {
			return;
		}

		previousMessageCount = messageCount;
		tray.setImage(getIconPath(messageCount > 0));
		updateToolTip(messageCount);
	},
};

function updateToolTip(counter: number): void {
	if (!tray) {
		return;
	}

	let tooltip = app.name;

	if (counter > 0) {
		tooltip += `- ${counter} unread ${counter === 1 ? 'message' : 'messages'}`;
	}

	tray.setToolTip(tooltip);
}

function getIconPath(hasUnreadMessages: boolean): string {
	const icon = hasUnreadMessages ? 'IconMenuBarUnreadTemplate.png' : 'IconMenuBarTemplate.png';
	return path.join(__dirname, '..', 'static', icon);
}
