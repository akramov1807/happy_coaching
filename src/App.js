import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Home from './pages/home/Home'
import Services from './pages/services/Services'

export default function App() {
  return (
    <Container fluid>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Container>
  )
}
