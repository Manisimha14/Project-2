import { useState } from 'react'
import ProductProvider from './context/ProductProvider'
import Products from './components/Products'
import Layout from './Layout'
import Home from './components/Home'

import Cart from './components/Cart'
import { createBrowserRouter, createRoutesFromElements,Route } from 'react-router'
import { RouterProvider } from 'react-router'
import ProductDetail from './components/ProductDetail'
import Wishlist from './components/Wishlist'
import Checkout from './components/Checkout'
import Admin from './components/Admin'
import AdminGate from './components/AdminGate'


function App() {
   const routes=createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    <Route path='products' element={<Products />} />
    <Route path='products/:id' element={<ProductDetail />} />
    <Route path='cart' element={<Cart />} />
    <Route path='wishlist' element={<Wishlist />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='/admin' element={<Admin />} />
    
    <Route path='admingate' element={<AdminGate />} />
    





   </Route>
   
    

   )
  )

  

  return (
    <>
   
    <ProductProvider>
    <RouterProvider router={routes}>
      <Products>

      </Products>
      <Cart></Cart>
      </RouterProvider>
     
    </ProductProvider>
    
    </>
  )
}

export default App
