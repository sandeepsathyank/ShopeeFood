import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../src/Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const { food_list, addToCart, RemoveFromCart, CartItems, GetTotalAmount } = useContext(StoreContext)

  const subTotal = GetTotalAmount()
  const delivery = subTotal > 0 ? 40 : 0
  const grandTotal = subTotal + delivery

  return (
    <div className="cartitems">
      <h1 className='h1'>Cart Items</h1>

      {subTotal === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Picture</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {food_list.map((item, index) => {
                  if (CartItems[item._id]) {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                          <img src={item.image} alt={item.name} className="cart-img" />
                        </td>
                        <td>{item.price} ₹</td>
                        <td>
                          <button className="btn-add" onClick={() => addToCart(item._id)}>+</button>
                          {CartItems[item._id]}
                          <button className="btn-remove" onClick={() => RemoveFromCart(item._id)}>-</button>
                        </td>
                        <td>{CartItems[item._id] * item.price} ₹</td>
                      </tr>
                    )
                  }
                  return null
                })}
              </tbody>
            </table>
          </div>

          <div className="bill">
            <table>
              <tbody>
                <tr>
                  <td>Sub Total :</td>
                  <td>{subTotal} ₹</td>
                </tr>
                <tr>
                  <td>Delivery charge :</td>
                  <td>{delivery} ₹</td>
                </tr>
                <tr className='grand'>
                  <td>Grand Total :</td>
                  <td>{grandTotal} ₹</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="order-btn-container">
            <button className='order' onClick={() => navigate('/placeOrder')}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
