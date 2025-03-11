import React from 'react'
import "./App.css"
import 'primeicons/primeicons.css';
import Navbar from './Navbar/Navbar'
import "primeflex/primeflex.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import ConnectMe from './ConnectMe/ConnectMe';
import Footer from './Footer/Footer';






const App=()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      <AboutMe/>
      <Projects/>
      <ConnectMe/>
      <Footer/>
    </div>
  )
}
      
export default App
