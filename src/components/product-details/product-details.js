import React, {Component} from 'react'
import {connect} from "react-redux";

class ProductDetails extends Component {


    itemId = Number(this.props.itemID)
    render() {
        const item = this.props.products.filter(item => item.id === this.itemId)
        const { img, title, price} = item[0]
        return(
            <>
                <div>{title}</div>
                <div>{img}</div>
                <div>{price}</div>
            </>
        )
    }
}

const mapStateToProps = ({products}) => {
    return{products}
}

export default connect(mapStateToProps)(ProductDetails)