import {
	app,
	BrowserWindow,
	dialog,
} from 'electron';
import {ipcMain} from 'electron-better-ipc';
import config from './config';
import tray from './tray';

export function getWindow(): BrowserWindow {
	const [win] = BrowserWindow.getAllWindows();
	return win;
}

export function sendAction<T>(action: string, arguments_?: T): void {
	const win = getWindow();

	win.restore();

	ipcMain.callRenderer(win, action, arguments_);
}

export async function sendBackgroundAction<T, ReturnValue>(action: string, arguments_?: T): Promise<ReturnValue> {
	return ipcMain.callRenderer<T, ReturnValue>(getWindow(), action, arguments_);
}

export function showRestartDialog(message: string): void {
	const buttonIndex = dialog.showMessageBoxSync(
		getWindow(),
		{
			message,
			detail: 'Do you want to restart the app now?',
			buttons: [
				'Restart',
				'Ignore',
			],
			defaultId: 0,
			cancelId: 1,
		},
	);

	if (buttonIndex === 0) {
		app.relaunch();
		app.quit();
	}
}

export const messengerDomain = config.get('useWorkChat') ? 'facebook.com' : 'messenger.com';

export function stripTrackingFromUrl(url: string): string {
	const trackingUrlPrefix = `https://l.${messengerDomain}/l.php`;
	if (url.startsWith(trackingUrlPrefix)) {
		url = new URL(url).searchParams.get('u')!;
	}

	return url;
}

export const toggleTrayIcon = (): void => {
	const showTrayIconState = config.get('showTrayIcon');
	config.set('showTrayIcon', !showTrayIconState);

	if (showTrayIconState) {
		tray.destroy();
	} else {
		tray.create(getWindow());
	}
};