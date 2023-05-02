import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = (event) => {
    event.preventDefault(); // 폼 제출 동작 막기
    toast("toastify test!");
  };
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <button onClick={notify}>Click Me</button>
      <ToastContainer />
    </div>
  );
}

export default App;
