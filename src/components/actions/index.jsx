export const increment = (product) => {
    return {
        type: 'INCREMENT',
        payload: product
    }
}

export const decrement = (price) => {
    return {
        type: 'DECREMENT',
        payload: price
    }
}