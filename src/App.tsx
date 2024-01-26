import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blogs/Blog.tsx";
import HomePage from "./Components/homePage/HomePage.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import ContactUs from "./Components/ContactUs/ContactUs.tsx";
import PrivacyPolice from "./Components/privacyPolice/PrivacyPolice.tsx";
import AyadAzad from "./Components/author/AyadAzad.tsx";
import AlexandraRybinskaya from "./Components/author/AlexandraRybinskaya.tsx";
import JennyWilson from "./Components/author/JennyWilson.tsx";
import LeslieAlexander from "./Components/author/LeslieAlexander.tsx";
import BlogContent from "./Components/BlogPost/BlogContent.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>

          {/*it's a dynamic routing, no need to change anything here*/}
          <Route path="/blog/:id/:title" element={<BlogContent />}></Route>

          <Route path="/privacyPolice" element={<PrivacyPolice />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/AyadAzad" element={<AyadAzad />}></Route>
          <Route
            path="/AlexandraRybinskaya"
            element={<AlexandraRybinskaya />}
          ></Route>
          <Route path="/JennyWilson" element={<JennyWilson />}></Route>
          <Route path="/LeslieAlexander" element={<LeslieAlexander />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
