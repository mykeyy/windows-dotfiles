# Zen Browser

This folder is the visual part of my Zen setup. It includes `userChrome.css`, the Nebula CSS files it uses, and the generated CSS for the Zen Mods that are actually enabled in the source profile.

The active Zen Mods are:

- **Transparent Zen** by sameerasw: transparent browser surfaces, a 165px compact sidebar, URL-bar zoom, tab-switch animation, trackpad animation, and transparent Glance.
- **Better Unloaded Tabs** by Felkazz: makes unloaded tabs greyscale and transparent.

The matching UI-related `about:config` values are in `user.js`. They include compact mode, the titlebar layout, the Transparent Zen animation and tint choices, sidebar width, and the settings that are currently switched off. Zen writes a lot of changing profile data into `prefs.js`, so `user.js` is the clean shareable version rather than a direct copy of that whole file.

It does not include the browser profile itself, installed Zen themes, or unused Zen Mods. Saved passwords, cookies, sessions, history, downloads, extensions, extension storage, sync data, workspace IDs, and search history are intentionally left out.

## Install

### Get the files

Clone the repo if you use Git:

```powershell
git clone https://github.com/mykeyy/windows-dotfiles.git
```

Or use GitHub's **Code** button and download the repo as a ZIP.

### Copy the config

1. Open Zen and go to `about:support`.
2. In **Application Basics**, select **Open Profile Folder**.
3. Close every Zen window. Make sure Zen is not still running in the background.
4. Open `windows-dotfiles/zen/` from the downloaded or cloned repo.
5. Copy its `chrome` folder into the Zen profile folder you opened.
6. Copy `user.js` into that same profile folder, beside `chrome`.
7. Start Zen again.

The profile should look like this afterward:

```text
your Zen profile/
|-- chrome/
|   |-- userChrome.css
|   |-- zen-themes.css
|   `-- Nebula/
`-- user.js
```

On the next launch Zen loads the custom CSS and the matching `about:config` preferences. That gives you Transparent Zen, Better Unloaded Tabs, the Nebula edge and spacing styling, compact mode, and the saved animation choices.

`user.js` enables `toolkit.legacyUserProfileCustomizations.stylesheets`, which lets Zen load `chrome/userChrome.css`. If you already keep your own `user.js` or `chrome` folder, merge the files instead of replacing them.

The CSS is built around Nebula and Zen's UI, so a future Zen update can change how some parts look. Keep a backup of your own profile before changing it.
