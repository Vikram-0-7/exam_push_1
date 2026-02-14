#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("\n🔧 SeatWise Application - Error Checker & Fixer\n");
console.log("=".repeat(50));

let errorCount = 0;
let warningCount = 0;
const fixes = [];

// Check 1: Verify all important files exist
console.log("\n📁 Checking file structure...");
const requiredFiles = [
  "backend/server.js",
  "backend/package.json",
  "backend/.env",
  "backend/models/Student.js",
  "backend/models/Exam.js",
  "backend/models/SeatAllocation.js",
  "backend/config/db.js",
  "backend/controllers/authController.js",
  "package.json",
  "src/App.tsx",
  "src/services/api.ts",
];

requiredFiles.forEach((file) => {
  const filePath = path.resolve(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING`);
    errorCount++;
  }
});

// Check 2: Verify .env configuration
console.log("\n⚙️  Checking backend configuration...");
const envPath = path.resolve(__dirname, "backend/.env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  if (envContent.includes("MONGO_URI")) {
    console.log("   ✅ MONGO_URI configured");
  } else {
    console.log("   ⚠️  MONGO_URI not set in .env");
    warningCount++;
  }
  if (envContent.includes("JWT_SECRET")) {
    console.log("   ✅ JWT_SECRET configured");
  } else {
    console.log("   ⚠️  JWT_SECRET not set in .env");
    warningCount++;
  }
  if (envContent.includes("PORT")) {
    console.log("   ✅ PORT configured");
  } else {
    console.log("   ⚠️  PORT not set, using default 5000");
    warningCount++;
  }
}

// Check 3: Verify package.json dependencies
console.log("\n📦 Checking dependencies...");
const backendPackage = path.resolve(__dirname, "backend/package.json");
if (fs.existsSync(backendPackage)) {
  const pkgContent = JSON.parse(fs.readFileSync(backendPackage, "utf-8"));
  const requiredDeps = [
    "express",
    "mongoose",
    "cors",
    "dotenv",
    "bcryptjs",
    "jsonwebtoken",
  ];

  requiredDeps.forEach((dep) => {
    if (pkgContent.dependencies && pkgContent.dependencies[dep]) {
      console.log(`   ✅ ${dep}`);
    } else {
      console.log(`   ❌ ${dep} - MISSING`);
      errorCount++;
    }
  });
}

// Check 4: Verify MongoDB models have proper syntax
console.log("\n🗄️  Checking database models...");
const modelsPath = path.resolve(__dirname, "backend/models");
const models = ["Student.js", "Exam.js", "SeatAllocation.js"];

models.forEach((model) => {
  const modelPath = path.join(modelsPath, model);
  if (fs.existsSync(modelPath)) {
    const content = fs.readFileSync(modelPath, "utf-8");
    if (
      content.includes("mongoose.Schema") &&
      content.includes("module.exports")
    ) {
      console.log(`   ✅ ${model}`);
    } else {
      console.log(`   ❌ ${model} - Invalid syntax`);
      errorCount++;
    }
  }
});

// Check 5: Verify API service configuration
console.log("\n🔌 Checking API configuration...");
const apiServicePath = path.resolve(__dirname, "src/services/api.ts");
if (fs.existsSync(apiServicePath)) {
  const apiContent = fs.readFileSync(apiServicePath, "utf-8");
  if (apiContent.includes("baseURL")) {
    console.log("   ✅ API baseURL configured");
  } else {
    console.log("   ⚠️  API baseURL not configured");
    warningCount++;
  }
  if (apiContent.includes("interceptors")) {
    console.log("   ✅ Request interceptors configured");
  } else {
    console.log("   ⚠️  Request interceptors not configured");
    warningCount++;
  }
}

// Summary
console.log("\n" + "=".repeat(50));
console.log("\n📊 Summary:");
console.log(`   ❌ Errors: ${errorCount}`);
console.log(`   ⚠️  Warnings: ${warningCount}`);

if (errorCount === 0 && warningCount === 0) {
  console.log("\n✅ All checks passed! No errors detected.\n");
} else if (errorCount === 0) {
  console.log("\n⚠️  All errors resolved, but some warnings exist.\n");
} else {
  console.log("\n❌ Some errors detected. Please review above.\n");
}

// Print fixes needed
if (fixes.length > 0) {
  console.log("🔧 Suggestions:");
  fixes.forEach((fix) => {
    console.log(`   • ${fix}`);
  });
  console.log("\n");
}

console.log("💡 Next Steps:");
console.log("   1. Ensure both backend and frontend servers are running");
console.log("   2. MongoDB server must be running");
console.log("   3. Check browser console for frontend errors");
console.log("   4. Check terminal output for backend errors");
console.log("   5. Verify API endpoints with curl or Postman\n");
