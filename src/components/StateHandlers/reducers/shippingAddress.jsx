import { PURGE } from 'redux-persist';

export const shippingAddress = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ADDRESS':
            return action.payload
        case PURGE:
            console.log("PURGING!");
            return {}
        default:
            return state;
    }
}