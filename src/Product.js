import React from 'react'

export default function Product () {
    return (
        <div className = "product-body">
          <div className = 'center-img'>
            <img src='classic-tee.jpg' alt='Classic tee' />
            </div>
          <div className = "product-text">
            <h3>Classic Tee</h3>
            <h4>$75.00</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div>
                <span>SIZE<span className = "required-star">*</span></span><span></span>
              </div>
            <div>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button id = "add-to-cart">ADD TO CART</button>
            </div>
          </div>
    )
}