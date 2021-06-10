import React, {useState} from 'react'

let selectedItems = []

function Product () {
    const [selectedSize, setSelectedSize] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    function selectSize (e) {
      setSelectedSize(e)
    }

    function addToCart (e) {
      e.preventDefault()
      if (selectedSize === '') {
         setErrorMessage('Please select size.')
      } else {
          selectedItems.push(selectedSize)
      }
    }

    return (
        <div className = "product-body">
          <div className = 'center-img'>
            <img src='classic-tee.jpg' alt='Classic tee' />
            </div>
          <div className = "product-text">
            <h3>Classic Tee</h3>
            <h4>$75.00</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div id="error-message">
                  {errorMessage}
              </div>
              <div>
                <span>SIZE<span className = "required-star">*</span></span><span> {selectedSize}</span>
              </div>
            <div>
              <button onClick={() => selectSize('S')}>S</button>
              <button onClick={() => selectSize('M')}>M</button>
              <button onClick={() => selectSize('L')}>L</button>
              <button id = "add-to-cart" onClick={addToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
    )
}

export { Product, selectedItems }
