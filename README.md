<div align="center">

# windows dotfiles

**my small, Rose Pine corner of Windows 11**

`PowerShell 7` &nbsp; `Windows Terminal` &nbsp; `YASB` &nbsp; `Fastfetch` &nbsp; `Oh My Posh` &nbsp; `Windhawk`

![Rose Pine](https://img.shields.io/badge/theme-Rose_Pine-c4a7e7?style=flat-square&labelColor=191724)
![Windows 11](https://img.shields.io/badge/Windows-11-9ccfd8?style=flat-square&labelColor=191724)
![work in progress](https://img.shields.io/badge/status-work_in_progress-ebbcba?style=flat-square&labelColor=191724)

</div>

## hey

A few people have asked for my Windows configs, so I finally started putting them somewhere that is easier to share.

This is the setup from my Acer laptop. It is not a giant Windows makeover, and I am not trying to replace every part of the desktop. I mostly wanted the things I look at every day to feel like they belong together: a borderless terminal, a clean prompt, Fastfetch, YASB, and a couple of taskbar tweaks. Rose Pine ties all of it together.

The repo is private while I clean up the rough edges. Once I am comfortable with the instructions and everything is safe to copy, I plan to make it public.

## the setup

| Part | What I use it for |
| :--- | :--- |
| **Windows Terminal** | Focus mode, acrylic transparency, zero padding, and a hidden scrollbar |
| **PowerShell 7** | My everyday shell |
| **Oh My Posh** | The Rose Pine prompt |
| **Fastfetch** | System info and my custom text logo |
| **YASB** | The top bar, widgets, and styling |
| **Windhawk** | The dock-like taskbar and notification center tweaks |

Windows Terminal opens in focus mode, which is where the borderless look comes from. PowerShell loads the Oh My Posh theme and then runs Fastfetch. Terminal and YASB both use JetBrains Mono Nerd Font variants. JetBrains Mono is still the font I tend to reach for first, especially when I want Nerd Font icons.

## what is here

```text
windows-dotfiles/
|-- fastfetch/          # layout and text logo
|-- oh-my-posh/         # Rose Pine prompt
|-- powershell/         # PowerShell 7 profile
|-- windhawk/           # exports for the active visual mods
|-- windows-terminal/   # terminal settings and color scheme
|-- yasb/               # bar config and stylesheet
`-- STARTUP.md          # what launches with Windows
```

GlazeWM is not here yet. It is installed on the laptop, but I have not settled on a config worth sharing. I may add Vencord bits later too, along with a proper install script. I would rather wait until those parts are actually useful than fill the repo with half-finished files.

## installing the apps

Run these from PowerShell:

```powershell
winget install --id Microsoft.PowerShell --source winget
winget install Microsoft.WindowsTerminal
winget install JanDeDobbeleer.OhMyPosh --source winget
winget install AmN.yasb
winget install fastfetch
```

Then install JetBrains Mono Nerd Font:

```powershell
oh-my-posh font install JetBrainsMono
```

Windhawk is optional. You only need it if you want the same taskbar and notification center changes. The mods and import notes are in [`windhawk/README.md`](windhawk/README.md).

## putting everything in place

Back up anything you already have before copying these files. They are my personal configs, so dropping them into the same paths will replace your current setup.

| File in this repo | Where it goes |
| :--- | :--- |
| `fastfetch/config.jsonc` | `%LOCALAPPDATA%\fastfetch\config.jsonc` |
| `fastfetch/logo.txt` | `%LOCALAPPDATA%\fastfetch\logo.txt` |
| `yasb/config.yaml` | `%USERPROFILE%\.config\yasb\config.yaml` |
| `yasb/styles.css` | `%USERPROFILE%\.config\yasb\styles.css` |
| `windows-terminal/settings.json` | `%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json` |
| `powershell/Microsoft.PowerShell_profile.ps1` | The path printed by `$PROFILE` in PowerShell 7 |
| `oh-my-posh/rose-pine.omp.json` | `%USERPROFILE%\oh-my-posh\rose-pine.omp.json` |

The PowerShell profile checks for Scoop shims, loads WinGet's command-not-found module when it is available, and adds Bun's user bin folder to `PATH`. Optional tools are skipped when they are not installed, so the profile should not fall apart just because one piece is missing.

### YASB weather

I left the weather API key and location out of the repo. Set them as user environment variables instead:

```powershell
[Environment]::SetEnvironmentVariable("YASB_WEATHER_API_KEY", "your-key", "User")
[Environment]::SetEnvironmentVariable("YASB_WEATHER_LOCATION", "your-location", "User")
```

Restart YASB after setting them. The config also has Komorebi workspace hooks, but the workspace widget hides itself when Komorebi is offline. The rest of the bar still works without it.

## what starts with Windows

YASB launches from a shortcut in the Windows Startup folder. Windhawk and PowerToys launch through scheduled tasks. I wrote down the details, including the pieces I chose not to export, in [`STARTUP.md`](STARTUP.md).

## later, maybe

- screenshots once I am happy with the whole desktop
- a one-command installer for new machines
- a GlazeWM config if I end up keeping it
- Vencord extras if they make sense here

For now, this is just the setup I actually use. Feel free to borrow a file, change the colors, or pull the whole thing apart for your own desktop.
