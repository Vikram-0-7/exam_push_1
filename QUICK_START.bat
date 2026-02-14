@echo off
REM Quick Start Guide for Windows - SeatWise Project

echo.
echo 🚀 SeatWise Project Initialization
echo ====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js version: %NODE_VERSION%
echo.

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install

REM Check if .env exists for backend
if not exist ".env" (
    echo ⚠️  Backend .env file not found. Using default configuration.
) else (
    echo ✓ Backend .env found
)

cd ..
echo.

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
 cd frontend
 call npm install
 cd ..
echo.

echo ✅ Installation complete!
echo.
echo 🎯 To start the development servers:
echo.
echo Terminal 1 - Backend:
echo   cd backend
echo   npm run dev
echo.
echo Terminal 2 - Frontend:
 echo   cd frontend
 echo   npm run dev
echo.
echo 📱 Access the application:
echo   Frontend: http://localhost:5173
echo   Backend API: http://localhost:5000
echo.
echo 🔐 Default Admin Credentials:
echo   Email: admin@university.edu
echo   Password: admin123
echo.
echo 📝 Note: Make sure MongoDB is running on localhost:27017
echo.
pause
