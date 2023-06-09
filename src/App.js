import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Test from "./components/Test";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<HomePage />}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/write-a-recommendation"  element={<WriteRecommendation />} />
          <Route exact path="/allblogs"   element={<AllBlogs />} />
          <Route exact path="/allprojects"   element={<AllProjects />} />
          <Route exact path="/project/add"  element={<AddProject />} />
          <Route exact path="/blog/add"  element={<AddBlog />}/>
          <Route exact path="/project/:id"  element={<ProjectPage />}/>
          <Route exact path="/blog/:id"    element={<BlogPage />}/>
          <Route exact path="/test"   element={<Test />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
