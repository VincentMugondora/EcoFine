// import React from 'react'
import About from "./Components/About"
import Home from "./Components/Home"
import Post from "./Components/Post"
import Blog from "./Components/Blog"
import "boxicons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Post" element={<Post />} />
        <Route exact path="/Blog:postId" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App
