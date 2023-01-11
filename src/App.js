import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './common/header/Header';
import Home from './components/home/Home';
import About from './components/home/about/About';
import CourseHome from './components/home/allcourses/CourseHome';
import Team from './components/home/team/Team';
import Pricing from './components/home/pricing/Pricing';
import Blog from './components/home/blog/Blog';
import Contact from './components/home/contact/Contact';
import Footer from './common/header/footer/Footer';


const App = () => {
  return (
    <>
    
    <Router>
    <Header />
    <Routes>
    <Route exact path='/' element = {<Home />} />
    <Route exact path='/about' element = {<About />} />
    <Route exact path='/courses' element = {<CourseHome />} />
    <Route exact path='/team' element = {<Team />} />
    <Route exact path='/pricing' element = {<Pricing />} />
    <Route exact path='/blog' element = {<Blog />} />
    <Route exact path='/contact' element = {<Contact />} />
   
    </Routes>
    <Footer />
    
   
  </Router>
    </>
  )
}

export default App;
