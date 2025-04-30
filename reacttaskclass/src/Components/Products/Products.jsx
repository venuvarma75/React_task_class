import React from 'react'
import "./Products"
import Product from '../Product/Product'
const Products =(data)=> {
    const product = [
        {
            id: 1,
            name: 'Laptop',
            cost:'25000'
        }
    ]
  return (
    <div>
      <Product data = {product}/>
    </div>
  )
}

export default Products
