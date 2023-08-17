import React from 'react'
import './list.css'

const List = () => {
    let products =JSON.parse(localStorage.getItem("products")) || [];
    console.log(products);
    return (
        <div id='main-box'>
            {products.map((product, ind) => {
                return (
                    <div key={ind}>
                        <img src={product.img} alt='' />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List