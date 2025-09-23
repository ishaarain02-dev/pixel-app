🚀 Pixel - Project Management Platform

Pixel is a modern and intuitive Project Management Platform built using the MERN Stack (MongoDB, Express, React, Node.js).
It helps users sign up, log in, manage tasks, and collaborate in teams.

✨ Features

Sign Up: Create a new account with name, email, and password

Log In: Secure login with JWT & bcrypt

Dashboard: Personal user dashboard after login

Stay Logged In: Session persists across visits

Project Management: Create projects, assign tasks, track progress

Responsive UI: Works across devices

🛠️ Tech Stack

Frontend

React.js

React Router DOM

Axios

CSS

Backend

Node.js + Express

MongoDB (Mongoose)

JWT Authentication

bcrypt.js (password hashing)

Tools

Git & GitHub

Postman (API testing)

Deployment: Vercel / Netlify / Render

📁 Project Structure
pixel-app/
├── pixel-app-client/   # React frontend
├── pixel-app-server/   # Node.js backend
├── README.md
└── package.json

⚡ Getting Started
Prerequisites

Node.js

MongoDB

Git

Clone the repository
git clone <repository-url>
cd pixel-app

Backend Setup
cd pixel-app-server
npm install


Create a .env file inside pixel-app-server:

MONGODB_URI=mongodb://localhost:27017/pixel-app
JWT_SECRET=my-secret-key
PORT=5001


Start the backend:

npm run dev

Frontend Setup
cd ../pixel-app-client
npm install
npm start


Frontend runs at http://localhost:3000
.

🧑‍💻 How It Works

Register → Create an account

Login → Access your dashboard

Manage Projects & Tasks → Assign & track progress

Stay Logged In → App remembers your session

Logout → End session securely

🔧 Helpful Commands

Frontend

npm start → Start dev server

npm run build → Production build

Backend

npm run dev → Start dev server

npm start → Run backend in production

🛠 Common Issues

Cannot connect to database

Make sure MongoDB is running

Verify .env has correct MONGODB_URI

Frontend not loading

Ensure both backend & frontend are running

Open http://localhost:3000

Login not working

Confirm .env has correct JWT_SECRET

Try creating a new account

📃 License

This project is licensed under the MIT License
.

✨ Maintained By

Technocolabs Software
📧 technocollabs@gmail.com