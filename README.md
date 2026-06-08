# Task Management System

A full-stack MERN (MongoDB, Express.js, React, Node.js) task management application with user authentication and CRUD operations for tasks.

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete tasks
- Mark tasks as pending or completed
- Responsive UI with form validation
- Protected API routes (users can only access their own tasks)

## Tech Stack

- **Frontend:** React (JavaScript), React Router, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, JWT, bcrypt
- **Database:** MongoDB with Mongoose


## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Task-Management-System
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-management
JWT_SECRET=your_secure_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend dev server:

```bash
npm run dev
```

### 4. Open the App

Visit `http://localhost:5173` in your browser.
