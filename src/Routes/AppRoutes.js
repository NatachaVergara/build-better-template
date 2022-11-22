import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Proyecto from '../Components/Home/Proyecto'

import AboutView from '../Views/AboutView'
import ContactView from '../Views/ContactView'
import HomeView from '../Views/HomeView'
import ProductosView from '../Views/ProductosView'
import ServiciosView from '../Views/ServiciosView'


const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/home' element={<HomeView />} />
      <Route path='/contacto' element={<ContactView />} />
      <Route path='/about' element={<AboutView />} />
      <Route path='/servicios' element={<ServiciosView />} />   
      <Route path='/productos' element={<ProductosView/>} />   
      <Route path='/proyecto/:proyecto' element={<Proyecto/>} />   
    </Routes>
  )
}

export default AppRoutes