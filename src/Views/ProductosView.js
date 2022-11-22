
import React from 'react'
import {gotoTop, title } from '../utils/functions'
import Productos from '../Components/Productos/Productos'

const ProductosView = () => {
title('Productos')
gotoTop()

  return (
   <Productos/>
  )
}

export default ProductosView