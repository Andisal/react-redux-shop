

const productsLoaded = (products) => {
    return {
        type: "PRODUCTS_LOADED",
        payload: products
    }
}

const productAddToCart = (product) => {
    return {
        type: "PRODUCT_CART_ADD",
        payload: product
    }
}


export {
    productsLoaded,
    productAddToCart
}