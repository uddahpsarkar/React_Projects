import { useState } from 'react'
import ToDoList from './To_Do_List.jsx';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import Projects from "./pages/Products";
import Services from "./pages/Services";
import Navigation from "./components/Navigation/Navigation";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </Router>
  )
}

export default App
