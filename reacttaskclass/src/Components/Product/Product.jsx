import React from 'react'

const Product = ({data}) => {
  return (
    <div>
      {data.map((x, index)=>{
        return (
            <div>
                <h1>{x.name}</h1>
                <h2>{x.cost}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default Product
