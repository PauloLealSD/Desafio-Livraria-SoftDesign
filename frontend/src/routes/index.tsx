import React from "react"
import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Info } from "../pages/Info"

const  Router = () => {
  return (
    <Routes>
      <Route path='/' element=
        {
          <Home />
        } 
      />
      <Route  path='/book/:id' element=
        {
          <Info />
        } 
      />
      <Route path='*' element=
        {
          <h2>Rota não encontrada</h2>
        } 
      />
    </Routes>
  )
}

export default Router
