export const updatePurchaseQty = (product) => {
    return {
        type: 'UPDATE_PURCHASEQTY',
        payload: product
    }
}

export const getProducts = (products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}