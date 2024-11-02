# MERN Blog Site ✍️

A modern blog platform built with the MERN Stack (MongoDB, Express, React, Node), Firebase Auth for secure login, and Tailwind CSS for responsive design.

## Features

- Secure user authentication via Firebase
- CRUD operations for managing blog posts
- Responsive, clean UI with Tailwind CSS

## Tech Stack

- Frontend: React, Tailwind CSS, Firebase Auth
- Backend: Node, Express, MongoDB

## Setup

1. Clone the repo:

```bash
git clone https://github.com/Nangjang/blog-site-using-mern-stack.git
cd blog-site-using-mern-stack
```

2. Install dependencies:

```bash
cd blog-site-frontend && npm install # Install frontend dependencies
cd ../blog-site-backend && npm install # Install backend dependencies
```

3. Set up environment variables in each `.env` file:

```plaintext
MONGODB_URI=<MongoDB URI>
FIREBASE_API_KEY=<Firebase API Key>
```

4. Run the app:

- Backend: Start the backend server in `/blog-site-backend`:

```bash
npm run dev
```

- Frontend: Start the frontend in `/blog-site-frontend`:

```bash
npm start
```

5. View the site: Open `http://localhost:3000` in your browser.
