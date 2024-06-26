import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import MenuBar from './components/MenuBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div style={{overflowX:'hidden'}} >
      <Header menuClicked={menuClicked} setMenuClicked ={setMenuClicked} />
      <MenuBar menuClicked={menuClicked}  setMenuClicked ={setMenuClicked} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
