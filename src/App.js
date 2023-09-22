import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React, { createContext, useState } from "react"
import ReactSwitch from 'react-switch';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import Cursor from './Cursor';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light"); //theme 값은 이후에 사용할 boolean 값과 id를 위해서 쓰여진다. 그리고, setTheme는 current에 적용시키기 위해서 toggleTheme를 위한 값으로 쓰여진다.

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light")); //위의 setTheme에 current를 지정한 다음에 current 값을 light로 정한 다음에 boolean값을 dark를 참으로 light를 거짓으로 한다.
  };

  const location = useLocation();

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
    <Cursor />
      <Navbar />   
      <div className="switch">
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/skill" element={<Skill/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer />
      </AnimatePresence>
    </div>
    </ThemeContext.Provider>
  );//label에 있는 theme === 의 상태를 light를 기준으로 boolean 값에 Light Mode를 참으로 Dark Mode를 거짓으로 설정했다. 
    //ReactSwitch에 toggleTeheme 뒤에 checked는 ReactSwitch의 이름을 정한다.
}

export default App;