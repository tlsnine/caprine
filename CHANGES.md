# Caprine macOS-Only Refactor — Change Summary

## Overview

This refactor transforms Caprine from a cross-platform Electron app (macOS, Windows, Linux) into a macOS-only application with a proper native macOS title bar. The primary problems being solved were:

1. The app window couldn't be dragged around the screen
2. The traffic light buttons (close/minimize/maximize) appeared randomly placed with no visible title bar
3. The sidebar and chat panels had mismatched heights due to fragile CSS selectors targeting Messenger's obfuscated DOM
4. The dock icon right-click menu showed empty text areas
5. Cross-platform code paths added complexity with no value (Linux/Windows support was removed)

Net result: **312 lines added, 659 lines removed** across 10 source files.

---

## 1. Native macOS Title Bar (`source/browser.ts`, `css/browser.css`, `source/index.ts`)

### The Problem
The previous approach used `titleBarStyle: 'hiddenInset'`, which overlays macOS traffic light buttons directly onto the web content. A `setupMacOSTitlebar()` function then injected a `<style>` element with fragile CSS selectors targeting Messenger's obfuscated class names (e.g., `.x78zum5.xdt5ytf.xzd29fr`). A `MutationObserver` constantly re-injected this CSS whenever the DOM changed. This caused:

- Sidebar and chat panel headers at different heights
- Layout breakage whenever Facebook changed their class names
- Drag regions overlapping clickable elements or vice versa

### The Solution
Switched to `titleBarStyle: 'hidden'` with a **dedicated HTML title bar div**. This is how apps like Slack, VS Code, and Discord handle macOS title bars.

**`source/browser.ts`** — The `setupMacOSTitlebar()` function was completely rewritten:
- **Before**: Injected a `<style>` element with CSS selectors targeting Messenger's DOM (`[role='navigation'] > div:first-child`, `[role='main'] > div:first-child`), added `padding-top: 38px !important`, set `app-region: drag` on Messenger elements, and used a `MutationObserver` to force-re-insert the style on every DOM change
- **After**: Creates a `<div id="caprine-titlebar">` element with a `<span id="caprine-titlebar-text">Caprine</span>` and prepends it to `<body>`. No CSS hacks, no MutationObserver, no fragile selectors

**`source/browser.ts`** — Double-click handler updated:
- **Before**: `target.closest('._36ic._5l-3,._5742,._6-xk,._673w')` — targeting Facebook's internal class names
- **After**: `target.id === 'caprine-titlebar' || target.id === 'caprine-titlebar-text'` — targeting our own stable element IDs

**`css/browser.css`** — Complete rewrite:
- **Removed**: Duplicate `html`/`body` rule blocks, fragile Messenger DOM selectors (`.x78zum5.xdt5ytf`, `[role='navigation'] > div:first-child`), and all `padding-top` / `-webkit-app-region` hacks
- **Added**: `#caprine-titlebar` styles — fixed position, 28px height, `app-region: drag`, centered "Caprine" text, light/dark mode, active/inactive window states. A `body > div:first-of-type` rule uses `padding-top: var(--titlebar-height)` to push Messenger content below the title bar

**`source/index.ts`**:
- `titleBarStyle: 'hiddenInset'` → `'hidden'`
- Removed `trafficLightPosition: { x: 16, y: 14 }` (not needed with `'hidden'` — traffic lights render inside our titlebar div)
- `setSheetOffset(40)` → `setSheetOffset(28)` (matches new titlebar height)

---

## 2. Cross-Platform Code Removal

### `source/index.ts` — Main Process
- Removed all `is.windows` and `is.linux` conditional branches
- Removed Windows-specific: `flashFrame()`, `setProgressBar()`, `alwaysOnTop` toggle for Windows
- Removed Linux-specific: `autostart` tray integration
- Simplified badge/dock handling to macOS-only (no `is.macos` conditionals — code always executes)
- Removed `commandLine.appendSwitch('enable-features', 'nPycMsgOnFavIcon')` (Linux-specific notification icon)

### `source/menu.ts` — Application Menu
- Removed the `linuxWindowsTemplate` containing Edit, View, Window, Help menus (built for non-macOS)
- Removed `is.macos ? macosTemplate : linuxWindowsTemplate` conditional — now always uses `macosTemplate`
- Removed Edit menu items: `undo`, `redo`, `cut`, `copy`, `paste`, `selectAll`, `findInPage` (macOS handles these in the app menu automatically)
- Removed View menu items: `autoHideMenuBar` toggle (Windows/Linux only)

### `source/tray.ts` — System Tray
- Removed Windows balloon notification code (`tray.displayBalloon()`)
- Removed Linux autostart path (`~/.config/autostart`)
- Simplified to macOS-only dock behavior
- Removed `is.macos` guards (code always runs on macOS)

### `source/config.ts` — Configuration Store
- Removed `flashWindowOnMessage` setting (Windows-only, flashes taskbar)
- Removed `autoHideMenuBar` setting (Windows/Linux only)

### `source/emoji.ts` — Emoji Shortcode Handler
- Removed `is.macos` conditional — `correctionPattern` always uses the macOS regex

### `source/menu-bar-mode.ts` — Menu Bar Mode
- Removed `is.macos` checks — always uses macOS `setWindowButtonVisibility()` API

### `source/util.ts` — Utilities
- Removed `toggleLaunchMinimized` (Windows/Linux start-on-boot)
- Removed `is.macos` conditional from `adjustTitleBarToDeletedConversationIsEnabled`

---

## 3. Dock Menu Fix

### `source/index.ts`
Filtered out conversations with empty labels from the dock menu:

```typescript
const dockMenu = Menu.buildFromTemplate(
    conversations
        .filter(({label}) => label && label.trim() !== '')
        .map(...)
);
```

Previously, conversations with empty `label` properties appeared as blank rows when right-clicking the dock icon.

---

## 4. Build Configuration (`package.json`)

- Removed `dist:linux` and `dist:win` npm scripts
- Replaced `dist:mac` with a single `dist` script for macOS
- Removed Linux build configs: `snap`, `AppImage`, `deb`, `rpm`, `pacman`, `freebsd`
- Removed Windows build configs: `win`, `nsis`, `portable`, `appx`
- Kept only the `mac` config targeting `dmg` and `zip`

---

## 5. Platform Class Simplification (`source/browser.ts`)

- **Before**: `document.documentElement.classList.add(\`os-\${process.platform}\`)` — dynamically added `os-darwin`, `os-win32`, or `os-linux`
- **After**: `document.documentElement.classList.add('os-darwin')` — hardcoded since we only run on macOS

---

## Architecture Decision: Why a Custom Title Bar Div?

The key insight: **you cannot reliably style Messenger's internal DOM for title bar behavior**. Facebook uses obfuscated, auto-generated class names (`.x78zum5.xdt5ytf.xzd29fr`) that change with every deployment. Any CSS or JS targeting those classes will break.

Instead, we create our own DOM element (`#caprine-titlebar`) that Electron renders as part of the web content. With `titleBarStyle: 'hidden'`, Electron hides its native title bar but still renders the traffic light buttons overlaid at the top-left of the window — which sits perfectly inside our 28px titlebar div. The result is a clean, native-feeling macOS title bar that:

- Always renders correctly regardless of Messenger DOM changes
- Provides a consistent drag region across both the sidebar and chat panels
- Shows "Caprine" as the window title
- Adapts to dark mode and inactive window states
- Correctly positions traffic lights without fragile padding calculations