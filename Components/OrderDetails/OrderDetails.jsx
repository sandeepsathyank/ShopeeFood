import React, { useContext } from 'react'
import { StoreContext } from '../../src/Context/StoreContext'
import './OrderDetails.css'
import { food_list } from '../../src/assets/assets'

const OrderDetails = () => {
  const { OrderDetails } = useContext(StoreContext)

  return (
    <div className="order-details">
      <h1>Order Details</h1>
      {OrderDetails.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        OrderDetails.map((order, index) => {
          let grandTotal = 0

          return (
            <div key={index} className="order-card">
                <table className="order-info-table">
    <tbody>
      <tr>
        <th>Name :</th>
        <td>{order.name}</td>
      </tr>
      <tr>
        <th>House :</th>
        <td>{order.housename}</td>
      </tr>
      <tr>
        <th>Address :</th>
        <td>{order.address}, {order.city}, {order.post}</td>
      </tr>
      <tr>
        <th>Contact :</th>
        <td>{order.contact}</td>
      </tr>
    </tbody>
  </table>
              
              <h3>Items:</h3>
              <ul>
                {Object.entries(order.items).map(([itemId, quantity]) => {
                  const product = food_list.find(f => f._id === itemId)
                  if (!product) return null

                  const itemTotal = product.price * quantity
                  grandTotal += itemTotal

                  return (
                    <li key={itemId}>
                      {product.name} - Quantity: {quantity}
                      <img src={product.image} alt={product.name} className="cart-img" />
                      <p>Price: {product.price} ₹</p>
                      <p>Total: {itemTotal} ₹</p>
                    </li>
                  )
                })}
              </ul>
                <p className='delivery'>Delivery Charges: 40 ₹</p>
              <h3 className="grand-total">Grand Total: {grandTotal+40} ₹</h3>
              <button className='proceed'>Proceed to Payment</button>
            </div>

          )
        })
      )}
    </div>
  )
}

export default OrderDetails
