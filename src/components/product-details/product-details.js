import React, {Component} from 'react'
import {connect} from "react-redux";

const ProductDetails = ({img, title, price}) => {
    return(
        <>
            <div>{title}</div>
            <div>{img}</div>
            <div>{price}</div>
        </>
    )
}

class ProductDetailsContainer extends Component {


    render() {
        const itemId = Number(this.props.itemID)
        const item = this.props.products.filter(item => item.id === itemId)
        return (
            <ProductDetails item={item[0]}/>
        )
    }
}

const mapStateToProps = ({products}) => {
    return{products}
}

export default connect(mapStateToProps)(ProductDetailsContainer)