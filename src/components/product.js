import React from 'react'

// let Product  = ({id, name, cost, handleClick}) => (
//     <div>
//         {name} ${cost} <button onClick={() => handleClick(id)}>Add to cart</button>
//     </div>
//
// )
let Product  = ({name, cost, description}) => (
    <section>
        <h2>{name} ${cost}</h2>
        <p>{description}</p>
    </section>

)

export default Product