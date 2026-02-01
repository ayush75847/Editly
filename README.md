# ✨ Editly - AI Code Editor

<div align="center">
  
  **A beginner-friendly online code editor with AI assistance**
  
  Write code, execute it instantly, and get help from AI!
  
  [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
  [![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
  ---
  
  ### 🎓 Perfect for Learning & Practicing Code!
  
</div>

---

## 📋 Table of Contents

- [What is Editly?](#-what-is-editly)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How to Use](#-how-to-use)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 What is Editly?

Editly is a **simple online code editor** where you can:
- ✍️ Write code in different programming languages
- ▶️ Run your code and see the output instantly
- 🤖 Get help from AI to review, fix, or explain your code
- 💾 Save your code for later use
- 📚 Learn programming with AI assistance

### Perfect For:
- 🎓 Students learning to code
- 👨‍💻 Developers who want to quickly test code snippets
- 🧑‍🏫 Teachers demonstrating code examples
- 🚀 Anyone who wants to code without installing anything!

---

## ✨ Features

### 1. 💻 Code Editor
- Simple text area to write your code
- Support for multiple programming languages (Python, JavaScript, Java, C++, etc.)
- Clean and easy-to-use interface

### 2. ⚡ Code Execution
- Run your code with one click using **Piston API**
- See output instantly
- View any errors that occur
- No need to install compilers on your computer!

### 3. 🤖 AI Assistant (Gemini AI)
- **Review Code**: Ask AI to check your code for bugs and improvements
- **Fix Code**: Let AI automatically fix errors in your code
- **Ask Questions**: Chat with AI about programming concepts
- Get explanations in simple language

### 4. 👤 User Accounts
- Sign up and log in
- Save your code projects
- Access your saved codes anytime

### 5. 📱 Simple & Responsive
- Works on desktop, tablet, and mobile
- Clean navigation with Home, About, Services, Contact pages
- User-friendly design built with Tailwind CSS

---

## 🛠️ Technologies Used

This project is built using the **MERN Stack** (MongoDB, Express, React, Node.js):

### Frontend (Client Side)
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool for modern web projects
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - For navigation between pages

### Backend (Server Side)
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for building the API
- **MongoDB** - Database to store users and their code projects
- **Mongoose** - Tool to interact with MongoDB easily
- **JWT (JSON Web Tokens)** - For user authentication
- **bcryptjs** - For password hashing (security)

### External APIs
- **Piston API** - Executes code in different programming languages
- **Gemini AI API** - Provides AI assistance for code review and help

---

## 🚀 Getting Started

Follow these simple steps to run the project on your computer:

### Prerequisites

Make sure you have these installed:
- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **MongoDB** (Download from [mongodb.com](https://www.mongodb.com/try/download/community))
- **Git** (Download from [git-scm.com](https://git-scm.com/))
- A code editor like **VS Code**

### Installation Steps

**1. Clone the Repository**
```bash
git clone https://github.com/yourusername/editly.git
cd editly
```

**2. Set Up the Backend**
```bash
# Go to backend folder
cd backend

# Install dependencies
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/editly
JWT_SECRET=your_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

**3. Set Up the Frontend**
```bash
# Go to frontend folder (open new terminal)
cd frontend

# Install dependencies
npm install
```

**4. Get Your Gemini API Key**
- Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
- Create a free API key
- Add it to your backend `.env` file

**5. Start MongoDB**
```bash
# On Windows: MongoDB runs automatically as a service
# On Mac: brew services start mongodb-community
# On Linux: sudo systemctl start mongod
```

**6. Run the Project**

Open **two terminal windows**:

Terminal 1 (Backend):
```bash
cd backend
npm start
```
Server will run on `http://localhost:5000`

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```
App will open on `http://localhost:5173`

**7. Open Your Browser**

Visit `http://localhost:5173` and start coding! 🎉

---

## 📖 How to Use

### 1. Create an Account
- Go to the **Signup** page
- Enter your name, email, and password
- Click "Sign Up"

### 2. Login
- Go to the **Login** page
- Enter your email and password
- Click "Login"

### 3. Write Code
- Go to the **Home Page** page
- Click new Project
- Select your programming language from the dropdown
- Write your code in the text editor

### 4. Run Code
- Click the **"Run"** button
- See your output right-side the editor
- If there are errors, they will be shown

### 5. Use AI Features

**Review Code:**
- Write your code
- Click **"Review Code"** button
- AI will analyze and give suggestions

**Fix Code:**
- If your code has bugs
- Click **"Fix Code"** button
- AI will suggest fixes

**Ask AI:**
- Have a question about coding?
- Use the AI chat feature
- Type your question and get instant answers

### 6. Save Your Code
- Click **"Save Code"** button
- Your code will be saved to your account
---

---

## 📁 Project Structure

```
editly/
│
├── frontend/                   # React frontend
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx     # Navigation bar component
│   │   ├── images/
│   │   │   └── logo/
│   │   │       ├── logo.png
│   │   │       └── symbol.png
│   │   ├── pages/
│   │   │   ├── About.jsx      # About page
│   │   │   ├── Contact.jsx    # Contact page
│   │   │   ├── Editor.jsx     # Main code editor page
│   │   │   ├── Home.jsx       # Home/landing page
│   │   │   ├── Login.jsx      # Login page
│   │   │   ├── NoPage.jsx     # 404 page
│   │   │   ├── Services.jsx   # Services page
│   │   │   └── Signup.jsx     # Signup page
│   │   ├── App.css            # Main CSS
│   │   ├── App.jsx            # Main App component
│   │   ├── index.css          # Global styles
│   │   └── main.jsx           # Entry point
│   ├── .gitignore
│   ├── index.html             # HTML template
│   ├── package.json
│   ├── postcss.config.js      # PostCSS config
│   ├── tailwind.config.js     # Tailwind CSS config
│   └── vite.config.js         # Vite configuration
│
├── backend/                    # Express backend
│   ├── bin/
│   │   └── www                # Server startup script
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── aiController.js    # AI features logic
│   │   └── userController.js  # User auth logic
│   ├── models/
│   │   ├── projectModel.js    # Project/Code schema
│   │   └── userModel.js       # User schema
│   ├── public/                # Static files
│   │   ├── images/
│   │   ├── javascripts/
│   │   └── stylesheets/
│   ├── routes/
│   │   ├── aiRoute.js         # AI API routes
│   │   ├── index.js           # Home routes
│   │   └── users.js           # User routes
│   ├── views/                 # EJS templates (if used)
│   ├── app.js                 # Express app setup
│   ├── package.json
│   └── package-lock.json
│
└── README.md                   # Project documentation
```

### Key Files Explained:

**Frontend:**
- `main.jsx` - App starts here
- `App.jsx` - Main component with routing
- `Editor.jsx` - The code editor page (main feature)
- `Navbar.jsx` - Navigation component used across pages

**Backend:**
- `app.js` - Express server setup
- `db.js` - MongoDB connection
- `userController.js` - Handles login/signup
- `aiController.js` - Handles AI features (review, fix, ask)
- `projectModel.js` - Database schema for saved code
- `userModel.js` - Database schema for users

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/YourFeature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some feature'`)
5. **Push to the branch** (`git push origin feature/YourFeature`)
6. **Open a Pull Request**

### Ideas for Contributions:
- Add syntax highlighting to the editor
- Add code autocomplete features
- Add error indicators (red underlines)
- Improve the UI design
- Add more AI features
- Fix bugs
- Improve documentation

---

## 💡 Future Improvements

Here are some features that could be added:
- ✨ **Syntax Highlighting** - Color-coded text for different code elements
- 🔍 **Auto-Complete** - Suggest code as you type
- ⚠️ **Error Indicators** - Red underlines for syntax errors
- 🎨 **Multiple Themes** - Dark mode, light mode, custom themes
- 📚 **Code Templates** - Pre-written code snippets for common tasks
- 👥 **Collaboration** - Real-time code sharing with friends
- 📊 **Code Statistics** - Track your coding activity

---

## 🙏 Acknowledgments

- **[Piston API](https://github.com/engineer-man/piston)** - For code execution
- **[Google Gemini AI](https://deepmind.google/technologies/gemini/)** - For AI features
- **[Vite](https://vitejs.dev/)** - For fast frontend development
- **[Tailwind CSS](https://tailwindcss.com/)** - For beautiful styling
- **[React](https://reactjs.org/)** - For building the user interface
- **[Express.js](https://expressjs.com/)** - For the backend server
- **[MongoDB](https://www.mongodb.com/)** - For data storage

Thanks to the open-source community! 🎉

---

## 💡 Learning Resources

If you're new to these technologies:

- **MERN Stack Tutorial**: [YouTube](https://www.youtube.com/results?search_query=mern+stack+tutorial)
- **React Docs**: [react.dev](https://react.dev/)
- **Node.js Tutorial**: [nodejs.dev](https://nodejs.dev/learn)
- **MongoDB University**: [Free Courses](https://university.mongodb.com/)
- **Tailwind CSS Docs**: [tailwindcss.com](https://tailwindcss.com/docs)

---

## 📧 Contact

Have questions or feedback?

- **GitHub**: [@yourusername](https://github.com/ayush75847)
- **Email**: ayushrawat75847@example.com

---

<div align="center">
  
  **Made with ❤️ for learning and coding**
  
  Happy Coding! 🚀
  
  [⬆ Back to Top](#-editly---ai-code-editor)
  
</div>