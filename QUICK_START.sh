#!/bin/bash

# Quick Start Guide - SeatWise Project

echo "🚀 SeatWise Project Initialization"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Check if .env exists for backend
if [ ! -f ".env" ]; then
    echo "⚠️  Backend .env file not found. Using default configuration."
else
    echo "✓ Backend .env found"
fi

cd ..
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..
echo ""

echo "✅ Installation complete!"
echo ""
echo "🎯 To start the development servers:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd backend"
echo "  npm run dev"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "📱 Access the application:"
echo "  Frontend: http://localhost:5173"
echo "  Backend API: http://localhost:5000"
echo ""
echo "🔐 Default Admin Credentials:"
echo "  Email: admin@university.edu"
echo "  Password: admin123"
echo ""
echo "📝 Note: Make sure MongoDB is running on localhost:27017"
echo ""
