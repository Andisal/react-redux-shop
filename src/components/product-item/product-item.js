import React, {Component} from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {productAddToCart} from "../actions";
import "./product-item.css"


const ProductItem = ({title, price, img, id, onAddedToCart}) => {
    return (
        <div className="item-inner">
            <Link to={`/product/${id}`}>
                <div className="item-img">
                    <figure className="img-responsive">
                        <img src={img} alt="img" className="img-item"></img>
                    </figure>
                    <div className="box-hover">
                        <ul className="add-to-links">
                            <li><span className="show-more">Посмотреть</span></li>
                            <li><span className="wish-list">В избранное</span></li>
                        </ul>
                    </div>
                </div>
                <div className="product-title">
                    <span>{title}</span>
                </div>
            </Link>
            <div className="rating"></div>
            <div className="item-price">{price}</div>
            <div className="item-action">
                <button onClick={onAddedToCart} className="item-button-action">В корзину</button>
            </div>
        </div>
    )
}

class ProductItemContainer extends Component{

    render(){
        const {title, img, price, id, onAddedToCart} = this.props
        return(
            <ProductItem title={title} img={img} price={price} id={id} onAddedToCart={()=>onAddedToCart(id)}/>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddedToCart: (id) => {
            dispatch(productAddToCart(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItemContainer)