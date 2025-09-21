# Pixel App

A simple web app that lets users sign up, log in, and access a private dashboard. Think of it like a basic social media app where you need to create an account to see your personal page.

## What This App Does

- **Sign Up**: Create a new account with your name, email, and password
- **Log In**: Use your email and password to access your account
- **Dashboard**: Once logged in, you can see your personal dashboard
- **Stay Logged In**: You won't need to log in every time you visit the website
- **Secure**: Your password is protected and your data is safe

## Technologies Used (Don't worry if you don't understand these yet!)

### Frontend (What you see in your browser)
- **React** - Makes the website interactive and responsive
- **React Router** - Helps navigate between different pages
- **Axios** - Sends information between your browser and the server
- **CSS** - Makes the website look pretty

### Backend (The server that handles your data)
- **Node.js** - Runs JavaScript on the server
- **Express** - Makes it easy to create a web server
- **MongoDB** - Stores your account information in a database
- **JWT** - Creates secure login tokens (like a digital ID card)
- **BCrypt** - Makes your password super secure

## How to Set Up This App

### What You Need First
- **Node.js** - This lets you run JavaScript on your computer (like having a JavaScript engine)
- **MongoDB** - This is a database that stores your user information (like a digital filing cabinet)
- **Git** - This lets you download the code from the internet

### Step-by-Step Setup

1. **Download the Code**
   Open your terminal (command prompt) and type:
   ```bash
   git clone <repository-url>
   cd pixel-app
   ```
   This downloads the code to your computer and moves you into the project folder.

2. **Set Up the Backend (Server)**
   ```bash
   cd pixel-app-server
   npm install
   ```
   This downloads all the tools needed to run the server part of your app.

3. **Set Up the Frontend (Website)**
   ```bash
   cd ../pixel-app-client
   npm install
   ```
   This downloads all the tools needed to run the website part of your app.

4. **Create Configuration File**
   
   Create a file called `.env` in the `pixel-app-server` folder and add these lines:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pixel-app
   JWT_SECRET=my-secret-password-123
   PORT=5001
   ```
   
   **What these do:**
   - `MONGODB_URI`: Tells the app where to find your database
   - `JWT_SECRET`: A secret password to keep user logins secure (you can change this to anything you want)
   - `PORT`: The number your server will run on

## How to Run the App

1. **Start the Backend Server**
   Open your terminal and type:
   ```bash
   cd pixel-app-server
   npm run dev
   ```
   You should see a message saying the server is running on `http://localhost:5001`

2. **Start the Frontend Website** (Open a NEW terminal window)
   ```bash
   cd pixel-app-client
   npm start
   ```
   Your web browser should automatically open to `http://localhost:3000`

3. **You're Done!**
   You should now see the Pixel App website in your browser!

## How the App Works

### What Happens When You Use the App

1. **Sign Up**: You create an account with your name, email, and password
2. **Log In**: You use your email and password to get into your account
3. **Dashboard**: Once logged in, you can see your personal dashboard
4. **Stay Logged In**: The app remembers you so you don't have to log in every time
5. **Log Out**: You can safely log out when you're done

### What You Can Do

- **Register Page**: Create a new account
- **Login Page**: Sign into your existing account  
- **Dashboard**: Your personal page (only you can see it)
- **Logout**: Sign out safely

## Helpful Commands

### For the Website (Frontend)
- `npm start` - Start the website
- `npm run build` - Make the website ready for the internet
- `npm test` - Check if everything works properly

### For the Server (Backend)  
- `npm run dev` - Start the server (what you'll use most)
- `npm start` - Start the server for the internet

## Common Problems and Solutions

### If Something Goes Wrong

1. **"Cannot connect to database"**
   - Make sure MongoDB is running on your computer
   - Check that your `.env` file has the right database address

2. **"Website won't load"**
   - Make sure both the server and website are running
   - Check that you opened the website at `http://localhost:3000`

3. **"Login doesn't work"**
   - Make sure you created the `.env` file with the JWT_SECRET
   - Try creating a new account first

4. **"Nothing happens when I click buttons"**
   - Check that both terminals are still running
   - Try refreshing your browser page

### Getting Help
If you're still stuck, try:
- Reading the error messages in your terminal
- Making sure you followed all the setup steps
- Asking for help from someone who knows programming

## You're All Set!
This app is a great way to learn how websites with user accounts work. Have fun exploring and don't be afraid to experiment!
