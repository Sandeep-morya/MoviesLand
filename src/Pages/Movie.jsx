import React from 'react'
import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { ThemeContext } from '../Context/ThemeContextProvider'
import Header from '../Header'


const Movie = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <div className='main' style={{ background: theme === "Dark" ? "white" : "Black" }}>
        <Header />
        <Navbar />

    </div>
  )
}

export default Movie