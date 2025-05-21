import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify'; // ✅ Toastify import
import 'react-toastify/dist/ReactToastify.css';  // ✅ Toastify styles

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer /> {/* ✅ Add ToastContainer here */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
