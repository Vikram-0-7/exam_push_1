# 📚 SeatWise - Complete Project Guide

Welcome to **SeatWise**, a modern exam seating assignment and management system for educational institutions.

## 🚀 Quick Navigation

### 📖 Documentation

- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete technical documentation
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - Project restructuring summary
- **[README.md](./README.md)** - Original project readme

### 🏃 Getting Started

- **[QUICK_START.bat](./QUICK_START.bat)** - Windows quick start
- **[QUICK_START.sh](./QUICK_START.sh)** - Linux/Mac quick start

## 📁 Project Structure

```
seat-assignment-hub-main/
│
├── 🔙 backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   ├── uploads/         # File upload directory
│   ├── server.js        # Express server
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   │   ├── admin/      # Admin pages
│   │   │   └── student/    # Student pages
│   │   ├── services/        # API service
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilities
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.ts    # Vite configuration
│   └── tsconfig.json     # TypeScript config
```

## 🎯 One-Minute Setup

### Step 1: Install Dependencies

```bash
# Windows
QUICK_START.bat

# Linux/Mac
bash QUICK_START.sh
```

### Step 2: Start Backend

```bash
cd backend
npm run dev
```

### Step 3: Start Frontend (in new terminal)

```bash
cd frontend
npm run dev
```

### Step 4: Access Application

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

## 🔐 Default Credentials

```
Admin Email: admin@university.edu
Admin Password: admin123
```

## ✨ Features

### 👨‍🎓 Student Portal

- View assigned exam seat
- See exam details and location
- Interactive seating grid
- Seat confirmation

### 👨‍💼 Admin Portal

- Upload student data (Excel/CSV)
- Generate automatic seating arrangements
- View statistics and reports
- Manage exam schedules

## 🛠️ Technology Stack

### Frontend

- React 19 + TypeScript
- Vite (blazingly fast build tool)
- TailwindCSS (utility-first styling)
- Radix UI (accessible components)
- React Router (navigation)
- Axios (HTTP client)
- React Query (data fetching)

### Backend

- Express.js (web framework)
- MongoDB (database)
- Mongoose (ODM)
- JWT (authentication)
- Multer (file uploads)
- XLSX (Excel parsing)

## 📚 API Reference

### Authentication Endpoints

```
POST /api/auth/student/login
POST /api/auth/admin/login
```

### Admin Endpoints

```
POST /api/admin/upload          # Upload student data
POST /api/admin/generate-seating # Generate seating
```

### Student Endpoints

```
GET /api/student/my-seat        # Get my seat assignment
```

## 🔧 Configuration

### Backend Environment (.env)

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/examdb
JWT_SECRET=examsecret
```

### Frontend API Configuration

Located in `frontend/src/services/api.ts`:

```typescript
baseURL: "http://localhost:5000/api";
```

## 📦 Scripts

### Frontend Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Run ESLint
```

### Backend Scripts

```bash
npm run dev          # Start with nodemon (auto-reload)
npm start            # Start server
npm run test         # Run tests
```

## 🗄️ Database Models

### Student

```javascript
{
  name: String,
  rollNumber: String (unique),
  department: String,
  semester: String,
  password: String (hashed)
}
```

### Exam

```javascript
{
  subject: String,
  date: Date,
  hall: String,
  capacity: Number
}
```

### SeatAllocation

```javascript
{
  studentId: ObjectId (ref: Student),
  examId: ObjectId (ref: Exam),
  hall: String,
  seatNumber: String,
  status: String (default: "pending")
}
```

## 🚀 Deployment

### Frontend

```bash
npm run build
# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - GitHub Pages
# - AWS S3 + CloudFront
```

### Backend

```bash
NODE_ENV=production npm start
# Deploy to:
# - Heroku
# - Railway
# - Render
# - AWS EC2
# - DigitalOcean
```

## 🔍 Troubleshooting

### MongoDB Connection Error

```
Error: connect ECONNREFUSED
```

**Solution:** Start MongoDB service

```bash
mongod  # Windows/Mac
sudo systemctl start mongod  # Linux
```

### Port Already in Use

**Solution:** Change PORT in backend `.env`

```env
PORT=5001  # Use different port
```

### CORS Errors

**Cause:** Frontend can't reach backend
**Solution:** Verify `baseURL` in `src/services/api.ts`

### Module Not Found

**Solution:** Reinstall dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 File Structure Mapping

| File/Folder           | Purpose               | Type     |
| --------------------- | --------------------- | -------- |
| `backend/`            | Express API server    | Backend  |
| `src/`                | React/TypeScript app  | Frontend |
| `src/pages/`          | Route components      | Frontend |
| `src/components/`     | Reusable components   | Frontend |
| `src/services/api.ts` | API configuration     | Frontend |
| `package.json`        | Dependencies          | Both     |
| `.env`                | Configuration secrets | Backend  |

## 🎓 Learning Resources

### Frontend

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)

### Backend

- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Guide](https://mongoosejs.com)

## 📞 Support

### Common Issues

**Q: How do I add a new page?**
A: Create a new file in `src/pages/`, add route in `src/App.tsx`

**Q: How do I create custom components?**
A: Add to `src/components/`, import where needed

**Q: How do I add new API endpoints?**
A: Create route file in `backend/routes/`, add controller logic

**Q: How do I change database schema?**
A: Update model in `backend/models/`, run migration

## 🎉 Next Steps

1. ✅ Install dependencies using QUICK_START script
2. ✅ Start backend and frontend servers
3. ✅ Login with admin credentials
4. ✅ Upload sample student data
5. ✅ Generate seating arrangements
6. ✅ Test student login and seat view

## 📋 Checklist

- [ ] Node.js installed (v16+)
- [ ] MongoDB running
- [ ] Dependencies installed
- [ ] Backend server running (Port 5000)
- [ ] Frontend server running (Port 5173)
- [ ] Can access frontend at http://localhost:5173
- [ ] Admin login works
- [ ] Student data upload works
- [ ] Seating generation works

## 🔗 Quick Links

- **Frontend Dev Server:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **API Docs:** See PROJECT_DOCUMENTATION.md
- **Migration Info:** See MIGRATION_SUMMARY.md

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** ✅ Production Ready

For detailed documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)
