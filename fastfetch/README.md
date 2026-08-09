# Fastfetch

This is a portable version of my Fastfetch layout. The OS, PC name, CPU, GPU, memory, and `C:` drive are read from the computer where it runs, so it should not claim that your machine is mine.

## Use it

Install Fastfetch, then copy `config.jsonc` and `logo.txt` to `%LOCALAPPDATA%\fastfetch\`. Open a new PowerShell window and run:

```powershell
fastfetch
```

The PowerShell profile in this repo already runs Fastfetch when it finds it.

## Make it yours

- **Logo:** replace the text in `logo.txt`. It is just a normal text file, so ASCII art, a wordmark, or nothing at all works.
- **Colours:** the ANSI colours in `config.jsonc` are Rose Pine-ish values. Search for `38;2;` and swap the RGB numbers if you want a different palette.
- **Local IP:** remove the `localip` line if you do not want Fastfetch to show your local network address.
- **More drives:** copy the `disk` line and change `C:\\` to the drive you want to show.
- **Personal lines:** add one or both of these after the first box if you want a name or socials in the output:

```jsonc
{ "type": "custom", "key": "  User:", "format": "\u001b[38;2;255;255;255myour-name" },
{ "type": "custom", "key": "  GitHub:", "format": "\u001b[38;2;156;207;216m@your-name" },
```

Those are deliberately left out of the default config, so a fresh install starts with only information from the local machine.

If you add a module that you want to keep between PCs, commit the changed file and pull it on the other machine. That is the nice part of keeping it in dotfiles instead of a one-off export.
