import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../cart'
import "./header.css"

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div>Россия Челябинск</div>
                            </div>
                            <div className="col-xs-6 hidden-xs">
                                <div className="top-links">
                                    <div className="links">
                                        <ul>
                                            <li><Link to="">Первый</Link></li>
                                            <li><Link to="">Второй</Link></li>
                                            <li><Link to="">Третий</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <div className="search-container">
                                <form action="">
                                    <input className="search-input" type="text" placeholder="Найти букет"/>
                                    <button className="search-button">
                                        <i className="fas fa-search"></i>
                                        <span>Search</span>
                                    </button>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-4 logo-block">
                            <div className="logo">
                                <Link to="/">
                                    <img src="http://wpdemo.magikthemes.com/creta/wp-content/uploads/sites/26/2016/02/logo.png" alt="Logo"/>
                                </Link>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <div className="top-cart-contain pull-right">
                                <div className="cart-block">
                                    <div className="cart">

                                        <span className="cart-count">0</span>
                                        <span className="price">
                                            Корзина /
                                            <span>100р</span>
                                        </span>
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header