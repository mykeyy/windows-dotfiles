# Windhawk settings

These exports contain only the settings for the active Windhawk mods. They do not include Windhawk binaries, caches, or disabled experiments.

Install these mods in Windhawk first:

- `explorer-details-better-file-sizes`
- `taskbar-icon-size`
- `windows-11-notification-center-styler`
- `windows-11-taskbar-styler`

The taskbar uses a dock-like acrylic style. The notification center has custom acrylic panels, rounded corners, and dark colors that fit the rest of the desktop. The icon-size mod sets a 50-pixel taskbar height with 30-pixel icons.

The `.reg` files came from each mod's `Settings` registry key. Importing them changes system-wide Windhawk settings under `HKLM`, so read the files before using them and run Registry Editor with administrator rights. Restart Explorer or sign out after importing if Windhawk does not refresh the shell automatically.

The disabled Start Menu Styler and CEF title-bar experiment are not part of this setup.
