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

// Transparent Zen mod settings from the active source profile.
user_pref("mod.sameerasw.zen_bg_blur", "3px");
user_pref("mod.sameerasw.zen_bg_color_enabled", false);
user_pref("mod.sameerasw.zen_bg_img_enabled", false);
user_pref("mod.sameerasw.zen_bg_img_not_fullscreen", false);
user_pref("mod.sameerasw.zen_bg_opacity", "0.8");
user_pref("mod.sameerasw.zen_compact_sidebar_width", "165px");
user_pref("mod.sameerasw.zen_no_shadow", false);
user_pref("mod.sameerasw.zen_tab_switch_anim", true);
user_pref("mod.sameerasw.zen_trackpad_anim", true);
user_pref("mod.sameerasw.zen_transparency_color", "#00000000");
user_pref("mod.sameerasw.zen_transparent_glance_enabled", true);
user_pref("mod.sameerasw.zen_transparent_sidebar_enabled", false);
user_pref("mod.sameerasw.zen_urlbar_zoom_anim", true);
