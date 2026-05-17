<div align="center">
	<br>
	<br>
	<a href="https://github.com/tlsnine/caprine">
		<img src="media/AppIcon-readme.png" width="200" height="200">
	</a>
	<h1>Caprine</h1>
	<p><b>Facebook Messenger for macOS</b></p>
	<p><em>macOS only — Linux and Windows are not supported.</em></p>
	<br>
	<a href="https://github.com/tlsnine/caprine/releases/latest">
		<img src="media/screenshot.png" width="846">
	</a>
</div>

## Why this fork

The original Caprine uses `titleBarStyle: 'hiddenInset'` and injects CSS into Facebook's DOM to create a drag region. This breaks every time Facebook changes their class names — sidebar and chat panels end up at different heights, the traffic lights float randomly, and the window can't be dragged.

This fork fixes all of that by replacing the entire approach with a native macOS title bar built as a real HTML element, and removes everything that isn't macOS.

### What's different

| Area | Original | This fork |
|------|----------|-----------|
| Title bar | `hiddenInset` + CSS hacks targeting `.x78zum5.xdt5ytf` etc. | `titleBarStyle: 'hidden'` + dedicated `#caprine-titlebar` div |
| Panel alignment | Fragile `padding-top` on Messenger's first-child divs | Title bar is fixed above content, panels always equal height |
| Drag region | `MutationObserver` re-injecting `<style>` on every DOM change | Single `-webkit-app-region: drag` on our own element |
| Platform support | macOS, Linux, Windows | macOS only |
| Dock menu | Shows empty rows for conversations without labels | Filters out empty labels |
| Build targets | dmg, zip, deb, rpm, AppImage, snap, exe, AppX | dmg and zip only |
| Code size | ~903 lines of cross-platform conditionals | Removed |

## Install

Download the latest `.dmg` from the [releases page](https://github.com/tlsnine/caprine/releases/latest).

Requires macOS 12+ (Intel and Apple Silicon).

### Build from source

```sh
git clone https://github.com/tlsnine/caprine.git
cd caprine
npm install && npm start
```

Package a DMG:

```sh
npm run dist
```

## Keyboard shortcuts

Description            | Keys
-----------------------|----------------------
New conversation       | <kbd>⌘</kbd> <kbd>n</kbd>
Search conversations   | <kbd>⌘</kbd> <kbd>k</kbd>
Toggle dark mode       | <kbd>⌘</kbd> <kbd>d</kbd>
Hide names and avatars | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>n</kbd>
Next conversation      | <kbd>⌘</kbd> <kbd>]</kbd>
Previous conversation  | <kbd>⌘</kbd> <kbd>[</kbd>
Jump to conversation   | <kbd>⌘</kbd> <kbd>1</kbd>–<kbd>9</kbd>
Insert GIF             | <kbd>⌘</kbd> <kbd>g</kbd>
Insert sticker         | <kbd>⌘</kbd> <kbd>s</kbd>
Insert emoji           | <kbd>⌘</kbd> <kbd>e</kbd>
Attach files           | <kbd>⌘</kbd> <kbd>t</kbd>
Focus text input       | <kbd>⌘</kbd> <kbd>i</kbd>
Search in conversation | <kbd>⌘</kbd> <kbd>f</kbd>
Mute conversation      | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>m</kbd>
Hide conversation      | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>h</kbd>
Delete conversation    | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>d</kbd>
Always on top          | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>t</kbd>
Toggle main window     | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>y</kbd>
Toggle sidebar         | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>s</kbd>
Switch to Messenger    | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>1</kbd>
Switch to Workchat     | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>2</kbd>
Preferences            | <kbd>⌘</kbd> <kbd>,</kbd>

## Credit

Based on [Caprine](https://github.com/sindresorhus/caprine) by [Sindre Sorhus](https://github.com/sindresorhus).

Caprine is a third-party app and is not affiliated with Meta.
