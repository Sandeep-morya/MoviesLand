import { NavLink } from "react-router-dom";

import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Navbar = () => {
    const {theme}=useContext(ThemeContext);
    const defColor=theme === "Dark" ? "black" : "white";
    const links=[
        {path:'/', name:'Homepage'},
        {path:'/bollywood', name:'Bollywood Movies'},
        {path:'/hollywood', name:'Hollywood Movies'},
        {path:'/animated', name:'Animated Movies'},
        {path:'/south', name:'South Indian Movies'},
        {path:'/18', name:'18+ Movies'},
    ]
  return (
    <div className="navbar">
        {links.map(e=><NavLink style={({isActive})=>isActive?{color:'red'}:{color:defColor}} key={e.path} to={e.path}>{e.name}</NavLink>)}
    </div>
  )
}

export default Navbar