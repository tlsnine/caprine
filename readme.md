<div align="center">
	<br>
	<br>
	<a href="https://github.com/tlsnine/caprine">
		<img src="media/AppIcon-readme.png" width="200" height="200">
	</a>
	<h1>Caprine</h1>
	<p>
		<b>Elegant Facebook Messenger desktop app for macOS</b>
	</p>
	<br>
	<br>
	<p>
		Caprine is an unofficial and privacy-focused Facebook Messenger app with many useful features.
		This is a macOS-only fork with a native macOS title bar and streamlined codebase.
	</p>
	<b>
		Caprine is feature complete. However, we welcome contributions for improvements and bug fixes.
	</b>
	<br>
		<a href="https://github.com/tlsnine/caprine">
		Website
		</a>
	<br>
	<a href="https://github.com/tlsnine/caprine/releases/latest">
		<img src="media/screenshot.png" width="846">
	</a>
</div>

## Highlights

- [Dark theme](#dark-mode)
- [Vibrant theme](#vibrancy)
- [Privacy-focused](#privacy)
- [Keyboard shortcuts](#keyboard-shortcuts)
- [Menu bar mode](#menu-bar-mode-macos-only)
- [Work Chat support](#work-chat-support)
- [Code blocks](#code-blocks)
- [Touch Bar support](#touch-bar-support-macos-only)
- [Custom styles](#custom-styles)
- Native macOS title bar
- Silent auto-updates
- Custom text size
- Emoji style setting
- Respects Do Not Disturb

## Install

*macOS 12+ (Intel and Apple Silicon) is supported.*

Download the latest version on the [releases page](https://github.com/tlsnine/caprine/releases/latest).

[**Download**](https://github.com/tlsnine/caprine/releases/latest) the `.dmg` file.

Or with [Homebrew](https://brew.sh): `$ brew install caprine`

### Build from source

```sh
git clone https://github.com/tlsnine/caprine.git
cd caprine
npm install && npm start
```

## Features

### Dark mode

You can toggle dark mode in the `View` menu or with <kbd>Command</kbd> <kbd>d</kbd>.

<img src="media/screenshot-dark.png" width="846">

### Hide Names and Avatars

You can prevent others from looking at who you're chatting with by enabling the "Hide Names and Avatars" feature in the "View" menu or with <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>n</kbd>.

### Vibrancy

On macOS, you can toggle the window vibrancy effect in the `View` menu.

<img src="media/screenshot-vibrancy.jpg" width="1165">

### Privacy

<img src="media/screenshot-block-typing-indicator.png" width="626">

You can choose to prevent people from knowing when you have seen a message and when you are currently typing. These settings are available under the `Caprine` menu.

### Mute desktop notifications

You can quickly disable receiving notifications from the `Caprine` menu or the Dock.

### Hide notification message preview

<div align="center"><img src="media/screenshot-hide-notification-message-location.png" width="300"></div>

<div align="center"><img src="media/screenshot-hide-notification-message-before.png" width="400"></div>

<div align="center"><img src="media/screenshot-hide-notification-message-after.png" width="400"></div>

You can toggle the `Show Message Preview in Notification` setting in the `Caprine` menu.

### Prevents link tracking

Links that you click on will not be tracked by Facebook.

### Jump to conversation hotkey

You can switch conversations similar to how you switch browser tabs: <kbd>Command</kbd> <kbd>n</kbd> (where `n` is `1` through `9`).

### Compact mode

The interface adapts when resized to a small size.

<div align="center"><img src="media/screenshot-compact.png" width="512"></div>

### Desktop notifications

Desktop notifications can be turned on in `Preferences`.

<div align="center"><img src="media/screenshot-notification.png" width="358"></div>

### Always on Top

You can toggle whether Caprine stays on top of other windows in the `Window` menu or with <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>t</kbd>.

### Work Chat support

Support for Work Chat: Messenger for [Workplace](https://www.facebook.com/workplace). You can switch to it in the `Caprine` menu.

<div align="center"><img src="media/screenshot-work-chat.png" width="788"></div>

### Code blocks

You can send code blocks by using [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code).

<div align="center"><img src="media/screenshot-codeblocks-dark.png" width="784"></div>
<div align="center"><img src="media/screenshot-codeblocks-light.png" width="784"></div>

### Background behavior

When closing the window, the app will by default continue running in the background. Right-click the dock icon and choose `Quit` to completely quit the app. Click the dock icon to show the window.

Note that you can change the behavior of Caprine so that the app closes when the window is closed. For this, you'll need to go to the settings and click on `Quit on Window Close`.

### Quick access to conversations from the Dock menu

<img src="media/screenshot-dock-menu.png" width="319" height="404">

### Touch Bar support

<img src="media/screenshot-touchbar.png" width="1085">

### Custom styles

Advanced users can modify the colors/styles of Caprine. Click the menu item `Caprine` → `Caprine Settings` → `Advanced` → `Custom Styles` and a CSS file will open up in your default editor.

### Menu Bar Mode <img src="media/screenshot-menu-bar-mode.png" width="20">

<img src="media/screenshot-menu-bar-menu.png" width="140" align="right">

You can enable `Show Menu Bar Icon` in the `Caprine Preferences` menu to have a Caprine icon in the menu bar. The icon will indicate when you have unread notifications and you can click it to toggle the Caprine window. You can also toggle the Caprine window with the global shortcut <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>y</kbd>.

You can also remove Caprine from the Dock and task switcher by clicking `Hide Dock Icon` menu item from the menu bar icon. There will then no longer be any menus for the window, but you can access those from the `Menu` item in the menu bar icon menu.

### Keyboard shortcuts

Description            | Keys
-----------------------| -----------------------
New conversation       | <kbd>Command</kbd> <kbd>n</kbd>
Search conversations   | <kbd>Command</kbd> <kbd>k</kbd>
Toggle "Dark mode"     | <kbd>Command</kbd> <kbd>d</kbd>
Hide Names and Avatars | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>n</kbd>
Next conversation      | <kbd>Command</kbd> <kbd>]</kbd> or <kbd>Control</kbd> <kbd>Tab</kbd>
Previous conversation  | <kbd>Command</kbd> <kbd>[</kbd> or <kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Tab</kbd>
Jump to conversation   | <kbd>Command</kbd> <kbd>1</kbd>…<kbd>9</kbd>
Insert GIF             | <kbd>Command</kbd> <kbd>g</kbd>
Insert sticker         | <kbd>Command</kbd> <kbd>s</kbd>
Insert emoji           | <kbd>Command</kbd> <kbd>e</kbd>
Attach files           | <kbd>Command</kbd> <kbd>t</kbd>
Focus text input       | <kbd>Command</kbd> <kbd>i</kbd>
Search in conversation | <kbd>Command</kbd> <kbd>f</kbd>
Mute conversation      | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>m</kbd>
Hide conversation      | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>h</kbd>
Delete conversation    | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>d</kbd>
Toggle "Always on Top" | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>t</kbd>
Toggle main window     | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>y</kbd>
Toggle sidebar         | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>s</kbd>
Switch to Messenger    | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>1</kbd>
Switch to Workchat     | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>2</kbd>
Preferences            | <kbd>Command</kbd> <kbd>,</kbd>

###### Tip

On macOS, you can [change these in the System Preferences](https://www.intego.com/mac-security-and-privacy-tips-how-to-change-keyboard-shortcuts-for-mac-apps/).

## FAQ

#### Can I contribute localizations?

The main app interface is already localized by Facebook. The app menus are not localized, and we're not interested in localizing those.

---

## Dev

Built with [Electron](https://electronjs.org).

### Run

```sh
npm install && npm start
```

### Build

```sh
npm run dist
```

Produces a DMG and ZIP for macOS (both Intel and Apple Silicon).

### Publish

```sh
npm run release
```

Then edit the automatically created GitHub Releases draft and publish.

## Maintainers

- [tlsnine](https://github.com/tlsnine)

**Upstream**

- [Dušan Simić](https://github.com/dusansimic)
- [Lefteris Garyfalakis](https://github.com/lefterisgar)
- [Michael Quevillon](https://github.com/mquevill)

## Links

- [Original project](https://github.com/sindresorhus/caprine)
- [Product Hunt post](https://www.producthunt.com/posts/caprine-2)

## Disclaimer

Caprine is a third-party app and is not affiliated with Meta.