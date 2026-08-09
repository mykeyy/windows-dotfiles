# Zen Browser

This folder is the visual part of my Zen setup. It includes `userChrome.css`, the Nebula CSS files it uses, and the Zen themes that were installed in the source profile.

It does not include the browser profile itself. Saved passwords, cookies, sessions, history, downloads, extensions, extension storage, sync data, workspace IDs, and search history are intentionally left out.

## Install

1. Open Zen and go to `about:support`.
2. In **Application Basics**, select **Open Profile Folder**.
3. Close Zen completely.
4. Copy this repo's `chrome` folder into that profile folder.
5. Copy `user.js` into the same profile folder, beside `chrome`.
6. Start Zen again.

`user.js` enables `toolkit.legacyUserProfileCustomizations.stylesheets`, which lets Zen load `chrome/userChrome.css`. If you already keep your own `user.js` or `chrome` folder, merge the files instead of replacing them.

The CSS is built around Nebula and Zen themes, so a future Zen update can change how some parts look. Keep a backup of your own profile before changing it.
