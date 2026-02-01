import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/login.jsx';
import Editor from './pages/Editor.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </>
  )
};

const RouteHandler = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor/:id" element={isLoggedIn ? <Editor /> : <Navigate to={"/login"} />} />
         <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to={"/login"} />} />
        <Route path="/services" element={isLoggedIn ? <Services /> : <Navigate to={"/login"} />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to={"/login"} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App