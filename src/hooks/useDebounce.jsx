import React from 'react'
import { useState,useEffect } from 'react'

function useDebounce(value,delay) {
    const [deboncevalue,setdebouncevalue]=useState(value)
    useEffect(() => {
      const timer=setTimeout(()=>{
        if(value==""){
            setdebouncevalue("")
            return 
        }
        setdebouncevalue(value)
      },delay)

      return (()=>{
        clearTimeout(timer)
      })
    
      
    }, [value,delay])

    return deboncevalue
    
  
}

export default useDebounce