import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Commercial from './components/Commercial'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pests from './components/Pests'
import Project from './components/Project'
import { AppProvider } from './context/AppContext'
import CleaningService from './components/CleaningService'



const App = () => {
  return (
    <>
    <AppProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='pests' element={<Pests/>}/>
        <Route path='/cleaning-service' element={<CleaningService/>}/>
        <Route path='/commercial' element={<Commercial/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/projects' element={<Project/>} />
      </Routes>
      <Footer/>
      </AppProvider>
    </>
  )
}

export default App