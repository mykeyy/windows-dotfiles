# What starts with Windows

Only a few startup items are responsible for the look in this repo.

YASB starts from this shortcut:

```text
%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\yasb.lnk
```

The shortcut points to the regular YASB installation in `C:\Program Files\YASB`. The shortcut itself is not included because it contains a machine-specific path. You can create a fresh shortcut from your own YASB installation if you want the bar to start when you sign in.

Windhawk runs through its `WindhawkRunUITask` scheduled task. It applies the taskbar, icon-size, Explorer, and notification-center mods documented in the Windhawk folder.

PowerToys also starts from a scheduled task. FancyZones is enabled on the original machine, but its layout data is not included here because it is tied to monitor IDs and desktop state.

GlazeWM and Komorebi are installed on the original machine, but neither was running when these files were collected. The YASB config still contains Komorebi workspace hooks and hides them while Komorebi is offline.

Windows Terminal opens in focus mode because `launchMode` is set to `focus` in its settings. That setting is what gives the terminal its stripped-down, borderless appearance.
