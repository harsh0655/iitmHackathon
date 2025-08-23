import './App.css';
import React from "react";
import FAQSection from "./components/FAQSection";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import LanguageDropdown from './components/LanguageDropdown';
import ThemeDropdown from './components/ThemeDropdown';
import Meditation from './components/Meditation.jsx';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* <FAQSection /> */}
      {/* <Footer/> */}
      {/* <Navbar/> */}
      {/* <Brands/> */}
      {/* <LanguageDropdown/> */}
      {/* <ThemeDropdown/>   */}
      <Meditation/>
    </div>
  );
}

export default App;
