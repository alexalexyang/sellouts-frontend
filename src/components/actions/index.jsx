export const getProducts = (products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

export const updatePurchaseQty = (product) => {
    return {
        type: 'UPDATE_PURCHASEQTY',
        payload: product
    }
}

export const getAddress = (address) => {
    return {
        type: 'GET_ADDRESS',
        payload: address
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}