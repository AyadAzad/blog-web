import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blogs/Blog.tsx";
import HomePage from "./Components/homePage/HomePage.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import ContactUs from "./Components/ContactUs/ContactUs.tsx";
import BlogPost from "./Components/BlogPost/BlogPost.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/blogPost" element={<BlogPost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
