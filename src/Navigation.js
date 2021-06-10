

import React, {useState, useEffect} from 'react'
import { selectedItems } from './Product'

export default function Navigation () {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(selectedItems)
  }, [selectedItems])

    return (
        <div className ="nav">
          <div className ="dropdown">
            <button className ="dropbtn">My Cart</button>
            <div class="dropdown-content">
              {/* {cartItems.map((item, i) => <div key={i} className="cart-item">{item}</div>)} */}
               <div className="cart-item"> 
                 <img id="product-selected" src="classic-tee.jpg" alt="classic tee"/>
                 <div className="product-text">1 x $75.00</div>
                 <div className="product-text">Size: Small</div>
              </div>
            </div>
          </div>
        </div>
    )
}