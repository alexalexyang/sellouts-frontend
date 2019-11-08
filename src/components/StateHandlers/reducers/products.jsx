import { PURGE } from 'redux-persist';

export const products = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return action.payload
        case PURGE:
            console.log("PURGING!");
            return {}
        default:
            return state;
    }
}