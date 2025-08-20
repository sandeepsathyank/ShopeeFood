import React, { useState } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../src/Context/StoreContext'
import { useNavigate } from 'react-router-dom'


const PlaceOrder = () => {
  const navigate=useNavigate()
  const [FormData, setFormData] = useState({name: '', housename: '', address: '', city: '', post: '', contact: ''})
  const {GetOrderDetails}=useContext(StoreContext)
  const submitForm=(e)=>{
    e.preventDefault()
    GetOrderDetails(FormData)
  }
   const recieve=(e)=>{
      setFormData({...FormData,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form className='details' onSubmit={submitForm}>
        <input onChange={recieve} value={FormData.name} type="text" name='name' placeholder='Name'/>
        <input onChange={recieve} value={FormData.housename} type="text"name='housename' placeholder='House Name'/>
        <input onChange={recieve} value={FormData.address} type="text" name='address' placeholder='Address'/>
        <input onChange={recieve}  value={FormData.city} type="text"name='city' placeholder='City'/>
        <input onChange={recieve} value={FormData.post} type="text" name='post' placeholder='Postal Code'/>
        <input onChange={recieve} value={FormData.contact} type="tel" name='contact' placeholder='Contact Number'/>
        <button className='confirm' onClick={()=>navigate('/orderdetails')} type='submit'>Confirm Order</button>
      </form>
 
    </div>
  )
}

export default PlaceOrder