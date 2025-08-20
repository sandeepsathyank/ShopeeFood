import React from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
export const StoreContext=createContext(null)

const StoreContextPro = (props) => {
  const [OrderDetails, setOrderDetails] = useState([])
  const [CartItems, setCartItems] = useState({ })
   useEffect(() => { 
   }, [CartItems])

    const addToCart=(ItemId)=>{
      if(!CartItems[ItemId]){
        setCartItems((prev)=>({...prev,[ItemId]:1}))
      }else{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
      }

    }
    const RemoveFromCart=(ItemId)=>{
          setCartItems((prev)=>{
          const updatedCart = {...prev}
        if (updatedCart[ItemId]==1){
          delete updatedCart[ItemId]}
          else{
            updatedCart[ItemId] -=1
          }
          return updatedCart

        })
            
    }
    const GetTotalAmount=()=>{
      let totalAmount=0
      for(const item in CartItems){
        let itemInfo=food_list.find((i)=>i._id==item)
        totalAmount+=itemInfo.price*CartItems[item]
      }
      return totalAmount
    }

   
    const GetCount=()=>{
      let totalcount=0
      for(const item in CartItems){
        totalcount+=1
      }
      return totalcount
    }


   const GetOrderDetails = (placeorder) => { 
   setOrderDetails([...OrderDetails,{...placeorder,items:CartItems}])  
    setCartItems({})
  }
  
    useEffect(()=>{console.log(OrderDetails)},[OrderDetails])      
    const ContextValue={
        food_list,
        addToCart,
        RemoveFromCart,
        GetTotalAmount,
        CartItems,
        GetCount,
        GetOrderDetails,
        OrderDetails
        
    }

  return (
    <StoreContext.Provider  value={ContextValue} >
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextPro