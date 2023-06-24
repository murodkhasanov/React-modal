import { useState } from 'react'
import './App.css'
import Modal from './Modal.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Works from './Works';


function App() {
  const [count, setCount] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="works" element={<Works />} />
          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
