import  React, { Component } from 'react';
import { Route } from 'react-router-dom'
import WelcomePage from '../pages';
import ProductDetails from '../product-details'
import "./app.css"

class App extends  Component {

    render(){
        return (
            <div>
                <Route path="/" component={WelcomePage} exact />
                <Route path="/product/:id"
                       render={({match})=>{
                           const { id } = match.params;
                           return <ProductDetails itemID={id}/>
                    }}/>
            </div>
        )
    }
}

export default App;