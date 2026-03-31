Start-Process powershell -ArgumentList "-NoExit", "cd Backend; .\run_backend.ps1"
Start-Process powershell -ArgumentList "-NoExit", "cd FrontEnd; .\run_frontend.ps1"