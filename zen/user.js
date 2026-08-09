// Portable Zen Browser preferences.
// Keep this in the root of the active profile, beside the chrome folder.

// Allow Zen to load userChrome.css from the profile's chrome folder.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Keep the compact, low-density browser layout from this setup.
user_pref("browser.uidensity", 1);
user_pref("browser.theme.toolbar-theme", 0);
user_pref("zen.theme.content-element-separation", 1);
user_pref("zen.view.compact.enable-at-startup", true);
user_pref("zen.view.compact.should-enable-at-startup", true);
user_pref("zen.workspaces.continue-where-left-off", true);
user_pref("zen.swipe.is-fast-swipe", false);
