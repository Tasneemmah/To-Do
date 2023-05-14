import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";


import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;