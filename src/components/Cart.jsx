import React  from 'react'
import { payNow } from '../service/Api'






const Cart = ({ cartitems, handleAddItem, handleDecrease, handleclearcart }) => {
  const totalPrice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0)


  return (
    <div className="cart-items">
      <div className="header">
      
        <p>Cart Items</p>
        {cartitems.length === 0 &&
          (<div>No items in cart</div>)
        }

        <div>
          {cartitems.length >= 1 && (
            <button onClick={handleclearcart}>clear cart</button>
          )}
        </div>
      </div>
      <div className="itemslist">
        {cartitems.map((item) => (
          <div key={item.id} className="">
            <div className="card allCartItems" style={{width: '18rem'}}>
                <img src={item.image} className="card-img-top respoImage" alt={item.name}  />
                <div className="card-body">
                  <h5 className="card-title">  {item.name}</h5>
                  <p className="card-text"> {item.about}</p>
                  <button className="btn btn-primary" onClick={() => handleAddItem(item)}>+</button>&nbsp;
                  <button  className="btn btn-primary" onClick={() => handleDecrease(item)}>-</button>
                  &nbsp;&nbsp;
                  {item.quantity}<span>&#215;</span>{item.price}
                </div>
              </div>
          <div>
              
            </div>
         
          </div>
        ))}
      
        
      </div>
      <div className="totalPrice itemslist">
          Total Price :&nbsp;{totalPrice}
          
        </div>
        <div className="totalPrice itemslist">
          <button onClick={()=>payNow(totalPrice,handleclearcart)} >Pay Now</button>
          
        </div>
      


    </div>
  )
}

export default Cart
