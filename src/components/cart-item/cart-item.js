import React from 'react'
import { Link } from 'react-router-dom'
import './cart-item.css'

const CartItem = (props) => {
    const {id, title, price, img, count} = props;
    return (

        <div className="item-inner">
            <Link to={`/product/${id}`}>
                <div className="product-image">
                    <img src={img} alt="item"/>
                </div>
                <div className="product-details">
                    <strong>{count}</strong><span> x </span>
                    <span className="cart-price">{price}</span>
                    <p className="product-name">{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default CartItem