import React from 'react'
import './App.css';

import Navigation from './Navigation'
import Product from './Product'

function App() {
  return (
 <div>
   <Navigation component={Navigation} />
   <Product component={Product} />
 </div>
  )
}

export default App;
