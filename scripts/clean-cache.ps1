# PowerShell script to clean Next.js cache files before build
Write-Host "Cleaning Next.js cache files..."
if (Test-Path ".next\cache") {
    Remove-Item -Recurse -Force ".next\cache"
    Write-Host "Cache cleaned successfully!"
} else {
    Write-Host "No cache directory found."
}

