# SeatWise - Exam Seating Assignment System

A complete exam seating arrangement and management system for educational institutions. This project combines a modern TypeScript/React frontend with an Express.js backend, providing an efficient solution for organizing and managing exam seating arrangements.

## Project Structure

```
seat-assignment-hub/
├── backend/                      # Express.js backend
│   ├── config/                   # Database configuration
│   ├── controllers/              # Route controllers
│   ├── models/                   # MongoDB models
│   ├── routes/                   # API routes
│   ├── utils/                    # Utility functions
│   ├── uploads/                  # File upload directory
│   ├── server.js                 # Main server file
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── frontend/                     # Frontend (Vite + React)
│   ├── src/                      # Frontend source code
│   │   ├── components/           # Reusable React components
│   │   ├── pages/                # Page components
│   │   │   ├── admin/           # Admin pages
│   │   │   ├── student/         # Student pages
│   │   │   └── Index.tsx        # Home page
│   │   ├── services/            # API services
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utilities
│   │   ├── App.tsx              # Main App component
│   │   └── main.tsx             # Entry point
│   ├── public/                   # Static assets
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.ts            # Vite configuration
│   └── tsconfig.json             # TypeScript configuration
│
└── README.md
```

## Features

### Student Features

- Login with roll number and password
- View assigned exam seat allocation
- See exam details (subject, date, time, location)
- Interactive seating grid visualization

### Admin Features

- Upload student data from Excel files
- Generate automatic seating arrangements
- View reports and statistics
- Manage exams and seating assignments

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or connection string)
- npm or bun package manager

## Installation & Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

Configure the `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/examdb
JWT_SECRET=examsecret
```

Start the backend server:

```bash
npm run dev    # Development with nodemon
# or
npm start      # Production
```

The server will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` (Vite default)

## API Endpoints

### Authentication

- `POST /api/auth/student/login` - Student login
- `POST /api/auth/admin/login` - Admin login (to be implemented)

### Admin Routes

- `POST /api/admin/upload` - Upload student data
- `POST /api/admin/generate-seating` - Generate seating arrangement

### Student Routes

- `GET /api/student/my-seat` - Get student's assigned seat

## Frontend Pages

- `/` - Home page
- `/student/login` - Student login
- `/student/dashboard` - Student dashboard
- `/student/seat` - Seat view and confirmation
- `/admin/login` - Admin login
- `/admin/upload` - Upload student data
- `/admin/generate` - Generate seating arrangements
- `/admin/reports` - View reports

## Technology Stack

### Frontend

- **React** 19+ with TypeScript
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Icon library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Query** - Server state management

### Backend

- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **XLSX** - Excel file parsing

## Environment Variables

### Backend (.env in backend/ folder)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/examdb
JWT_SECRET=your-secret-key-here
```

### Frontend API Configuration

The API base URL is configured in `src/services/api.ts`:

```typescript
baseURL: "http://localhost:5000/api";
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

### Production Build

**Frontend:**

```bash
npm run build
# Output in dist/ directory
npm run preview
```

**Backend:**

```bash
NODE_ENV=production npm start
```

## Database Models

### Student

- `name` - Student name
- `rollNumber` - Unique roll number
- `department` - Department
- `semester` - Semester/Year
- `password` - Hashed password

### Exam

- `subject` - Exam subject
- `date` - Exam date
- `hall` - Exam hall
- `capacity` - Hall capacity

### SeatAllocation

- `studentId` - Reference to Student
- `examId` - Reference to Exam
- `hall` - Hall name
- `seatNumber` - Seat number/position
- `status` - Allocation status

## Seating Algorithm

The system uses a randomization algorithm to fairly distribute students across available seats:

1. Students are randomized to ensure fair distribution
2. Seats are assigned sequentially across halls
3. The algorithm can be extended to handle special requirements

## Future Enhancements

- Admin authentication system
- Export seating arrangements as PDF
- Email notifications to students
- Real-time seating updates
- Support for exam invigilators/supervisors
- Conflict resolution for seat swaps
- Analytics and reporting dashboard
- Multi-language support

## Troubleshooting

### Backend won't connect to MongoDB

- Ensure MongoDB service is running
- Check MONGO_URI in .env file
- Verify connection string format

### CORS errors

- Ensure backend CORS is properly configured
- Check that API base URL in frontend matches backend port

### Port already in use

- Change PORT in backend .env
- Change vite port with `vite --port 3000`

## Contributing

Contributions are welcome! Please follow the existing code style and add tests for new features.

## License

This project is licensed under the ISC License.

## Support

For issues, questions, or suggestions, please open an issue on the project repository.
