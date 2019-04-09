
const initialState = {
    products: [
        {
            id: 1,
            title: "Bunch of Assorted Gerberas in a Glass",
            price: 4000,
            img: "https://cdn3.flowwow.com/data/flowers/262x262/46/1520399770_42622246.jpg",
            author: "Galina"
        },
        {
            id: 2,
            title: "Rosen",
            price: 4000,
            img: "https://cdn3.flowwow.com/data/flowers/262x262/46/1520399770_42622246.jpg",
            author: "Galina"
        },
        {
            id: 3,
            title: "Rose",
            price: 4000,
            img: "https://cdn3.flowwow.com/data/flowers/262x262/46/1520399770_42622246.jpg",
            author: "Galina"
        },
        {
            id: 4,
            title: "Rosen",
            price: 4000,
            img: "https://cdn3.flowwow.com/data/flowers/262x262/46/1520399770_42622246.jpg",
            author: "Galina"
        }],
    cart: []
}


const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (product, item = {}) => {

    const {
        id = product.id,
        count = 0,
        title = product.title,
        img = product.img,
        price = product.price } = item


    return {
        id,
        title,
        count: count + 1,
        img,
        price
    };
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADED": {
            return {
                sellers: action.payload
            }
        }
        case "PRODUCT_CART_ADD": {
            const productId = Number(action.payload);
            const product = state.products.find((item) => item.id === productId)
            const itemIndex = state.cart.findIndex(({id}) => id===productId)
            const item = state.cart[itemIndex]


            const newItem = updateCartItem(product, item)
            return {
                ...state,
                cart: updateCartItems(state.cart, newItem, itemIndex)
            }
        }
        default:
            return state
    }
}

export default reducer