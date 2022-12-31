import { Route, Routes } from "react-router-dom";

import React from 'react'
import App from "../App";
import Movie from "../Pages/Movie";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/*" element={<Movie/>}/>
    </Routes>
  )
}

export default AllRoutes