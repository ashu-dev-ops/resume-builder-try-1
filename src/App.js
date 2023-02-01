import React from "react";
// import {}
// import{Route,}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/functional/Footer";
import Navbar from "./components/functional/Navbar";
import ProtectedRoute from "./components/functional/ProtectedRoute";
// import { ProtectedRoute } from "./components/functional/ProtectedRoute";
import SideBar from "./components/functional/SideBar";
import AboutPage from "./components/pages/Blog";
import Blog from "./components/pages/Blog";
import BlogsPage from "./components/pages/BlogsPage";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import SingleBlogPage from "./components/pages/SingleBlogPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <ProtectedRoute path="/resume" element={<Resume />}></ProtectedRoute> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<Contact />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog-page/:blogId" element={<SingleBlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
