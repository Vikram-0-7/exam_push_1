# SeatWise - Exam Seating Assignment System

A smart and efficient exam seating assignment and management system for educational institutions.

## Features

- **Student Dashboard**: View exam schedules and assigned seating
- **Admin Panel**: Upload student data, generate seating arrangements, and view reports
- **Intelligent Seating**: Automatic seating arrangement to prevent cheating
- **Real-time Updates**: Instant seat confirmation and notifications
- **Multi-Exam Support**: Handle multiple exams and halls simultaneously

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd seat-assignment-hub

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ..\frontend
npm install

# Start the development servers
# Backend (in one terminal)
cd ..\backend
npm run dev

# Frontend (in another terminal)
cd ..\frontend
npm run dev
```

### Building for Production

```sh
cd frontend
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Technology Stack

This project is built with:

- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern UI library
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Tanstack Query** - Data fetching & caching
- **React Hook Form** - Form management
- **Lucide Icons** - Icon library

## Project Structure

```
frontend/
└── src/
	├── components/          # Reusable UI components
	│   └── ui/             # shadcn/ui components
	├── pages/              # Page components
	│   ├── student/        # Student-facing pages
	│   └── admin/          # Admin panel pages
	├── hooks/              # Custom React hooks
	├── lib/                # Utility functions
	├── App.tsx             # Main app component
	└── main.tsx            # Entry point

backend/
└── server.js              # Express server
```

## Features

- **Student Portal**: View assigned seating, exam schedules, and hall information
- **Admin Dashboard**: Manage students, generate seating arrangements, and view reports
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant notifications and updates
- **User Authentication**: Secure login for students and administrators

## Development

### Local Development

1. Install backend dependencies: `cd backend && npm install`
2. Install frontend dependencies: `cd frontend && npm install`
3. Start backend: `cd backend && npm run dev`
4. Start frontend: `cd frontend && npm run dev`
5. Open http://localhost:5173 in your browser

### Code Quality

- ESLint configuration for code consistency
- TypeScript for type safety
- Component-based architecture for maintainability

## License

This project is proprietary and confidential.

## Support

For issues or feature requests, please contacts the development team.
# exam_seat
# exam_push
