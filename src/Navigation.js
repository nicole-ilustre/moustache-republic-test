
import React from 'react'

export default function Navigation () {

    return (
        <div className ="nav">
          <div className ="dropdown">
            <button className ="dropbtn">My Cart</button>
            <div class="dropdown-content">
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