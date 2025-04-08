import React from 'react'
import './App.css'
import Navbar from './Components/Navber'
import Hero from './Components/Hero';
import { Footer } from './Components/Footer';
import MainContent from './Components/MainPage';

function App() {

  return (
    <>
    <Navbar></Navbar>
      <Hero></Hero>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}

export default App
