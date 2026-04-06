import React from 'react'
import Productscontext from './products'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { collection,getDocs } from 'firebase/firestore'
import {db} from "../database/firebase"


function ProductProvider({children}) {
   const [products,setProducts]=useState([])
   
   const [cartprice,setCartprice]=useState(0)
  
   const [wishlistprice,setwishlistprice]=useState(0)
   const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  })
  
  const [wishlist, setwishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist")
    return stored ? JSON.parse(stored) : []
  })

  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"))
      
      
  
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
  
      setProducts(productsData)
  
    } catch (error) {
      console.log(error)
    }
  }

   useEffect(() => {
        getProducts()
   }, [])

  
 

  
   useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cart))
   }, [cart])

   useEffect(() => {
     localStorage.setItem("wishlist", JSON.stringify(wishlist))
   }, [wishlist])

   function onAddToCart(product){
      setCart((previous)=>{
        const exist=previous.find((p)=> product.id==p.id)
        if(exist){
           return previous.map((p)=>
                p.id==product.id?{...p,quantity:p.quantity+1}:p
            )
        }else{
            return [...previous,{...product,quantity:1}]
        }
      })
   }

   function increaseqty(product){
        setCart((previous)=>
            previous.map((p)=>
              p.id===product.id ? {...p,quantity:p.quantity+1}:p
            )
        )
   }

   function decreaseqty(product){
        setCart((previous)=>
            previous
              .map((p)=>
                p.id===product.id ? {...p,quantity:p.quantity-1}:p
              )
              .filter((p)=> p.quantity >0)
        )
   }

   function onRemoveCart(product){
       setCart((previous)=>
        previous.filter((p)=>p.id!==product.id)
       )
   }

   function addToWishlist(product){
        setwishlist((previous)=>[...previous,product])
   }

   function removefromwishlist(product){
        setwishlist((previous)=>
           previous.filter((p)=> product.id!==p.id)
        )
   }

  return (
    <Productscontext.Provider value={{
      products,
      onAddToCart,
      cart,
      onRemoveCart,
      addToWishlist,
      wishlist,
      removefromwishlist,
      increaseqty,
      decreaseqty
    }}>
        {children}
    </Productscontext.Provider>
  )
}

export default ProductProvider