import React, { Component } from 'react';
import { bindActionCreators } from "redux/es/redux";
import  { connect } from "react-redux";
import { productsLoaded } from "../actions";
import ProductItem from '../product-item';

import "./product-list.css"



class ProductList extends Component {

    render() {
        const products = this.props.products;
        return (
            <div>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <div className="item col-lg-3 col-md-3 col-sm-4">
                                        <div className="item-border">
                                            <ProductItem
                                                id={product.id}
                                                title={product.title}
                                                price={product.price}
                                                img={product.img}
                                            />
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return { products }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({productsLoaded}, dispatch)
}
export default  connect(mapStateToProps, mapDispatchToProps)(ProductList)