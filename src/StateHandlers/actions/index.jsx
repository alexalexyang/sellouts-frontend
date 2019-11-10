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

export const updateCartTotal = (total) => {
    return {
        type: 'UPDATE_CART_TOTAL',
        payload: total
    }
}

export const getPages = (pages) => {
    return {
        type: 'GET_PAGES',
        payload: pages
    }
}


export const setLanguage = (language) => {
    return {
        type: 'SET_LANGUAGE',
        payload: language
    }
}

export const setLanguages = (languages) => {
    return {
        type: 'SET_LANGUAGES',
        payload: languages
    }
}