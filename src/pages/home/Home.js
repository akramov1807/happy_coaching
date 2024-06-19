import React from 'react'
import Menu from './components/Menu'
import '../../css/home.css'
import About from './components/About'
import List from './components/List'
import Stay from './components/Stay'
import Section from './components/Section'
import Get from './components/Get'

export default function Home() {
  return (
    <>
      <Menu />
      <About />
      <List />
      <Stay />
      <Section />
      <Get />
    </>
  )
}
