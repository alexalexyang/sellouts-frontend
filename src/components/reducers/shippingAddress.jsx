export const shippingAddress = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ADDRESS':
            return action.payload
        default:
            return state;
    }
}