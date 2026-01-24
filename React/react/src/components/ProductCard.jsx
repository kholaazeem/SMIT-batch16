import React from 'react'

const ProductCard = ({id,name,price}) => {
  return (
    <div>
         <div  style={{backgroundColor:'red'}}>
        <h1>{name}</h1>
           <h1>{price}</h1>
            
    </div>
    </div>
  )
}

export default ProductCard