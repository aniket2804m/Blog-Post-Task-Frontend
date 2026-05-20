# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Blog Post Management System

A Full Stack MERN Blog Post Management Application built using React.js, Node.js, Express.js, and MongoDB.

This project allows users to:
- Create blog posts
- View blog posts
- Edit blog posts
- Delete blog posts
- Search blog posts
- Export posts to CSV
- Responsive UI for Mobile / Tablet / Desktop

---

# Tech Stack

## Frontend
- React.js
- Material UI
- React Router DOM
- React Hook Form
- Axios
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Features

## Backend Features
- CRUD APIs
- Pagination
- Search API
- CSV Export API
- MongoDB Integration
- Error Handling

## Frontend Features
- Responsive Design
- Add/Edit Post Form
- View Details Page
- Search Functionality
- Toast Notifications
- Reusable Components
- Custom Hooks

---

# Folder Structure

## Frontend

```bash
frontend/
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
```

## Backend

```bash
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
```

---

# Installation

## Clone Repository

```bash
git clone <your-github-repository-link>
```

---

# Backend Setup

## Move to Backend Folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Start Backend Server

```bash
npm start
```

Backend Runs On:
```bash
http://localhost:5000
```

---

# Frontend Setup

## Move to Frontend Folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend Runs On:
```bash
http://localhost:5173
```

---

# API Endpoints

## Create Post

```http
POST /api/posts
```

## Get All Posts

```http
GET /api/posts
```

## Get Single Post

```http
GET /api/posts/:id
```

## Update Post

```http
PUT /api/posts/:id
```

## Delete Post

```http
DELETE /api/posts/:id
```

## Search Posts

```http
GET /api/posts/search?keyword=react
```

## Export CSV

```http
GET /api/posts/export/csv
```

---

# Environment Variables

## Backend `.env`

```env
PORT=
MONGO_URI=
```

---

# Deployment

## Frontend Deployment
- Vercel
- Netlify

## Backend Deployment
- Render
- Railway

## Database
- MongoDB Atlas

---

# Screens

- Blog Listing Page
- Add/Edit Blog Post Page
- View Blog Details Page

---

# Validation

The application includes:
- Required field validation
- Email validation
- Error handling
- Success & failure notifications

---

# Responsive Design

Fully responsive for:
- Mobile Devices
- Tablets
- Desktop Screens

---

# Author

Aniket Suryawanshi

---

# License

This project is developed for internship assessment purposes.
