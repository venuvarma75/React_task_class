import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"







const P1={
           id:1,
           name:"laptop",
           cost:15000
}

const P2={
           id:2,
           name:"mobile",
           cost:15000
}

const App=()=> {
  return (
    <div>
     <Navbar/>
    <Products/>
    {/* <h1>{P1.name}</h1>
    <h2>{P2.cost}</h2> */}

    </div>
  )
}

export default App
