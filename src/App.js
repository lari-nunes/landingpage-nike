import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import Nike from './components/Nike'

import ShoesOne from './assets/shoes1.png'
import ShoesTwo from './assets/shoes2.png'
import ShoesThree from './assets/shoes3.png'
import BackgroundOne from './assets/background1.png'
import BackgroundTwo from './assets/background2.png'
import BackgroundThree from './assets/background3.png'
import Sidebar from './components/Sidebar'
import BackgroundOpacity from './components/BackgroundOpacity'

const App = () => {
  const styles = [
    {
      navbarStyle: 'navbar-one',
      buttonStyle: 'button-one',
      selectedColorStyle: 0,
      shoesStyle: ShoesOne,
      backgroundStyle: BackgroundOne,
    },
    {
      navbarStyle: 'navbar-two',
      buttonStyle: 'button-two',
      selectedColorStyle: 1,
      shoesStyle: ShoesTwo,
      backgroundStyle: BackgroundTwo,
    },
    {
      navbarStyle: 'navbar-three',
      buttonStyle: 'button-three',
      selectedColorStyle: 2,
      shoesStyle: ShoesThree,
      backgroundStyle: BackgroundThree,
    },
  ]

  const [selectedStyle, setSelectedStyle] = useState({})
  const [show, setShow] = useState(false)

  const handleSidebar = () => {
    setShow(!show)
    document.documentElement.classList.toggle('overflow-hidden')
  }

  const handleColor = (index) => {
    setSelectedStyle(styles[index])
  }

  return (
    <div>
      <div className='container'>
        <Navbar
          navbarStyle={selectedStyle.navbarStyle}
          handleSidebar={handleSidebar}
        />
        <Hero
          handleColor={handleColor}
          buttonStyle={selectedStyle.buttonStyle}
          shoesStyle={selectedStyle.shoesStyle}
          selectedColorStyle={selectedStyle.selectedColorStyle}
        />
        <Background backgroundStyle={selectedStyle.backgroundStyle} />
        <Nike />
      </div>
      {show && <BackgroundOpacity handleSidebar={handleSidebar} />}
      <Sidebar handleSidebar={handleSidebar} show={show} />
    </div>
  )
}

export default App