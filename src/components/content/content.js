import React from 'react'
import "./content.css"
import ProductList from '../product-list'

const Content = () =>{
    return (
        <div className="content-page">
            <div className="container">
                <div className="row">
                    <div className="main-content">
                        <div className="category-product">
                            <div className="product-header">
                                <div className="new-title">
                                    <h2>Новинки</h2>
                                </div>
                            </div>
                            <div className="product-grid">
                                <ProductList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content