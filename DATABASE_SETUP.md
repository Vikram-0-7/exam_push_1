# 🎯 SeatWise Database Setup - Complete Guide

## ✅ Verification Summary

| Component       | Status      | Details           |
| --------------- | ----------- | ----------------- |
| Node.js         | ✅ Working  | v22.14.0          |
| npm             | ✅ Working  | v10.9.2           |
| MongoDB         | ✅ Running  | Service confirmed |
| Database Models | ✅ Enhanced | All fields added  |

---

## 📊 Database Models Overview

### 1️⃣ **Student Model**

```javascript
{
  name: String (required),
  rollNumber: String (unique, required),
  department: String (required),
  semester: String (required),
  password: String (required, min 6 chars),
  examList: [ObjectId] (references to Exams),
  email: String (optional),
  contactNumber: String (optional),
  isActive: Boolean (default: true),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Example:**

```javascript
{
  name: "John Doe",
  rollNumber: "21CS005",
  department: "Computer Science",
  semester: "4",
  password: "hashed_password_here",
  email: "john@university.edu",
  contactNumber: "9876543210",
  examList: ["exam_id_1", "exam_id_2"],
  isActive: true
}
```

---

### 2️⃣ **Exam Model**

```javascript
{
  subject: String (required),
  date: Date (required),
  startTime: String (required, e.g., "09:00"),
  endTime: String (required, e.g., "12:00"),
  hall: String (required),
  capacity: Number (required, min 1),
  floor: String (optional),
  block: String (optional),
  isActive: Boolean (default: true),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Example:**

```javascript
{
  subject: "Data Structures",
  date: "2026-02-15",
  startTime: "09:00",
  endTime: "12:00",
  hall: "Hall A",
  capacity: 100,
  floor: "2nd",
  block: "C",
  isActive: true
}
```

---

### 3️⃣ **SeatAllocation Model**

```javascript
{
  studentId: ObjectId (reference to Student, required),
  examId: ObjectId (reference to Exam, required),
  hall: String (required),
  seatNumber: String (required),
  row: Number (optional),
  column: Number (optional),
  block: String (optional),
  floor: String (optional),
  status: Enum ["pending", "confirmed", "cancelled"] (default: "pending"),
  assignedAt: Date (default: now),
  confirmedAt: Date (optional),
  createdAt: Date (auto),
  updatedAt: Date (auto),

  // UNIQUE INDEX: (examId, seatNumber, hall)
}
```

**Example:**

```javascript
{
  studentId: "student_id_xyz",
  examId: "exam_id_abc",
  hall: "Hall A",
  seatNumber: "A12",
  row: 2,
  column: 4,
  block: "C",
  floor: "2nd",
  status: "confirmed",
  confirmedAt: "2026-02-14T10:30:00Z"
}
```

---

## 🚀 Next Steps

### Step 1: Install Dependencies

```bash
# Go to project root
cd c:\Users\saiya\Downloads\seat-assignment-hub-main

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 2: Verify Database Setup

```bash
# Run the verification script
cd backend
node verify-db.js
```

You should see:

```
✅ MongoDB Connected Successfully
✅ Database Setup Verification Complete!
```

### Step 3: Start the Servers

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

Expected output:

```
Server running on port 5000
MongoDB Connected
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

Expected output:

```
VITE ready in 234ms
➜ Local: http://localhost:5173/
```

### Step 4: Test the Application

1. Open browser: **http://localhost:5173**
2. Try admin login:
   - Email: `admin@university.edu`
   - Password: `admin123`
3. Upload student data
4. Generate seating arrangements
5. Test student login with sample credentials

---

## 📝 API Endpoints Quick Reference

### Student Management

- `POST /api/auth/student/login` - Student login
- `GET /api/student/my-seat` - Get assigned seat

### Admin Management

- `POST /api/auth/admin/login` - Admin login
- `POST /api/admin/upload` - Upload student data
- `POST /api/admin/generate-seating` - Generate seating

---

## 🗄️ Database Connection String

Location: `backend/.env`

```env
MONGO_URI=mongodb://127.0.0.1:27017/examdb
```

If MongoDB runs on different port/host, update accordingly.

---

## ✨ Key Features of Enhanced Models

### ✅ Data Validation

- Required fields with custom error messages
- Min/Max constraints
- Enum validation for status values

### ✅ Indexing

- Roll number indexed for fast lookups
- Student and Exam IDs indexed in SeatAllocation
- Unique composite index on (examId, seatNumber, hall)

### ✅ Timestamps

- Automatic `createdAt` and `updatedAt` fields
- Track when seats are assigned and confirmed
- Audit trail for all records

### ✅ Relationships

- Student -> ExamList (one to many)
- SeatAllocation -> Student (many to one)
- SeatAllocation -> Exam (many to one)

---

## 🔍 Database Administration

### View Database

```bash
# Connect to MongoDB shell
mongosh

# List databases
show databases

# Use examdb
use examdb

# Show collections
show collections

# View sample student
db.students.findOne()

# View sample exam
db.exams.findOne()

# View sample seat allocation
db.seatallocations.findOne()

# Count documents
db.students.countDocuments()
db.exams.countDocuments()
db.seatallocations.countDocuments()
```

---

## 🐛 Troubleshooting

### "MongoDB Connection Error"

```bash
# Verify MongoDB is running
Get-Service MongoDB

# Start MongoDB if stopped
Start-Service MongoDB

# Or manually start mongod:
mongod
```

### "Port 5000 already in use"

```bash
# Change port in backend/.env
PORT=5001
```

### "Cannot find module"

```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install

cd backend
rm -r node_modules package-lock.json
npm install
```

### "CORS errors"

Ensure API base URL matches in `src/services/api.ts`:

```typescript
baseURL: "http://localhost:5000/api";
```

---

## 📚 Sample Data Script

Create sample data for testing:

```bash
# Create backend/seed-db.js (optional)
# This can populate test data automatically
```

---

## ✅ Verification Checklist

- [ ] MongoDB running
- [ ] Node.js v16+ installed
- [ ] npm dependencies installed in root
- [ ] npm dependencies installed in backend
- [ ] `.env` file exists in backend folder
- [ ] Database models enhanced with all fields
- [ ] `verify-db.js` runs successfully
- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] Can access http://localhost:5173

---

## 📞 Quick Reference

| Task           | Command             | Location        |
| -------------- | ------------------- | --------------- |
| Verify DB      | `node verify-db.js` | backend/        |
| Start Backend  | `npm run dev`       | backend/        |
| Start Frontend | `npm run dev`       | root/           |
| View Models    | `.js` files         | backend/models/ |
| Check .env     | `.env` file         | backend/        |

---

**Status:** ✅ Ready to Run  
**Date:** February 2026  
**Next:** Start the servers and begin development!
