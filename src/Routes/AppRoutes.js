import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from '../Views/HomeView'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/home' element={<HomeView />} />

    </Routes>
  )
}

export default AppRoutes