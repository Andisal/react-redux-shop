import React, {Component} from 'react'
import { connect } from "react-redux";
import CartItem from '../cart-item'
import './cart.css'
import {Link} from "react-router-dom";


class Cart extends Component{
    render(){
        const cart = this.props.cart;
        return (
            <div className="top-cart-content">
                <div className="no-item">
                    <ul className="mini-cart-list">
                        {
                            cart.map((item) => {
                                return(
                                    <li key={item.id} className="item-in-cart">
                                        <CartItem id={item.id} title={item.title} img={item.img} price={item.price} count={item.count}/>
                                    </li>
                                )
                            })
                        }
                        <div className="actions">
                            <Link to="/checkout">
                                <button className="btn-checkout"><span>Оплатить</span></button>
                            </Link>
                            <Link to="/cart">
                                <button className="view-cart">В корзину</button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart}) => {
    return {cart}
}

export default connect(mapStateToProps)(Cart)