# --- 1. Fix the Path so Scoop apps work ---
$scoopPath = "$env:USERPROFILE\scoop\shims"
if ((Test-Path -LiteralPath $scoopPath) -and $env:PATH -notlike "*$scoopPath*") {
    $env:PATH += ";$scoopPath"
}

# --- 2. Load Modules (Suppressing Winget error if it's acting up) ---
try {
    Import-Module -Name Microsoft.WinGet.CommandNotFound -ErrorAction SilentlyContinue
} catch {}

# --- 3. Oh My Posh ---
$poshTheme = "$HOME\oh-my-posh\rose-pine.omp.json"
if ((Get-Command oh-my-posh -ErrorAction SilentlyContinue) -and (Test-Path -LiteralPath $poshTheme)) {
    oh-my-posh init pwsh --config $poshTheme | Invoke-Expression
}

# --- 4. Startup Fetch ---
$fastfetchPackage = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Fastfetch-cli.Fastfetch_*" -Directory -ErrorAction SilentlyContinue | Select-Object -First 1
if ($fastfetchPackage -and $env:PATH -notlike "*$($fastfetchPackage.FullName)*") {
    $env:PATH += ";$($fastfetchPackage.FullName)"
}

if (Get-Command fastfetch -ErrorAction SilentlyContinue) {
    try { Clear-Host } catch {}
    fastfetch
}

# --- 5. Dev Paths ---
$bunPath = "$HOME\.bun\bin"
if ((Test-Path -LiteralPath $bunPath) -and $env:PATH -notlike "*$bunPath*") {
    $env:PATH += ";$bunPath"
}
