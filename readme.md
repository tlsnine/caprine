<div align="center">
	<br>
	<br>
	<a href="https://github.com/tlsnine/caprine">
		<img src="media/AppIcon-readme.png" width="200" height="200">
	</a>
	<h1>Caprine</h1>
	<p>
		<b>Facebook Messenger for macOS</b>
	</p>
	<p>
		<em>Fork of <a href="https://github.com/sindresorhus/caprine">sindresorhus/caprine</a> — macOS only.</em>
	</p>
	<br>
	<a href="https://github.com/tlsnine/caprine/releases/latest">
		<img src="media/screenshot.png" width="846">
	</a>
</div>

## ⚠️ macOS Only

This fork is **macOS only**. Linux and Windows have been removed. For cross-platform support, use [the original](https://github.com/sindresorhus/caprine).

## What Changed

This fork strips Caprine down to macOS and fixes the title bar:

- **Native macOS title bar** — Dedicated drag region with traffic lights, not a hacky CSS overlay. Sidebar and chat panels are always the same height.
- **Removed Linux and Windows** — All platform conditionals, build targets, and platform-specific code from 8 source files gone.
- **Removed fragile Messenger DOM hacks** — The old `setupMacOSTitlebar()` injected `<style>` elements targeting obfuscated Facebook class names (`.x78zum5.xdt5ytf.xzd29fr`) with a `MutationObserver` to force-re-inject on DOM changes. Replaced with a clean, stable `#caprine-titlebar` div.
- **Fixed dock menu** — No more empty text areas when right-clicking the dock icon.

## Install

Download the latest `.dmg` from the [releases page](https://github.com/tlsnine/caprine/releases/latest).

macOS 12+ (Intel and Apple Silicon).

### Build from source

```sh
git clone https://github.com/tlsnine/caprine.git
cd caprine
npm install && npm start
```

To build a DMG:

```sh
npm run dist
```

## Features

- Native macOS title bar with drag support
- Dark mode (<kbd>Command</kbd> <kbd>d</kbd>)
- Vibrancy effect
- Privacy mode (block typing indicators and read receipts)
- Work Chat support
- Code blocks in messages
- Touch Bar support
- Menu bar mode
- Do Not Disturb integration
- Keyboard shortcuts
- Custom styles
- Custom text size
- Hide names and avatars (<kbd>Command</kbd> <kbd>Shift</kbd> <kbd>n</kbd>)

## Keyboard Shortcuts

Description            | Keys
-----------------------|----------------------
New conversation       | <kbd>Command</kbd> <kbd>n</kbd>
Search conversations   | <kbd>Command</kbd> <kbd>k</kbd>
Toggle dark mode       | <kbd>Command</kbd> <kbd>d</kbd>
Hide names and avatars | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>n</kbd>
Next conversation      | <kbd>Command</kbd> <kbd>]</kbd> or <kbd>Control</kbd> <kbd>Tab</kbd>
Previous conversation  | <kbd>Command</kbd> <kbd>[</kbd> or <kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Tab</kbd>
Jump to conversation   | <kbd>Command</kbd> <kbd>1</kbd>–<kbd>9</kbd>
Insert GIF             | <kbd>Command</kbd> <kbd>g</kbd>
Insert sticker         | <kbd>Command</kbd> <kbd>s</kbd>
Insert emoji           | <kbd>Command</kbd> <kbd>e</kbd>
Attach files           | <kbd>Command</kbd> <kbd>t</kbd>
Focus text input       | <kbd>Command</kbd> <kbd>i</kbd>
Search in conversation | <kbd>Command</kbd> <kbd>f</kbd>
Mute conversation      | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>m</kbd>
Hide conversation      | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>h</kbd>
Delete conversation    | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>d</kbd>
Always on top          | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>t</kbd>
Toggle main window     | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>y</kbd>
Toggle sidebar         | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>s</kbd>
Switch to Messenger    | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>1</kbd>
Switch to Workchat     | <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>2</kbd>
Preferences            | <kbd>Command</kbd> <kbd>,</kbd>

## Acknowledgements

- [Sindre Sorhus](https://github.com/sindresorhus) and the [original Caprine contributors](https://github.com/sindresorhus/caprine/graphs/contributors)

## Disclaimer

Caprine is a third-party app and is not affiliated with Meta.