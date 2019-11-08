import { PURGE } from 'redux-persist';

export const cart = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PURCHASEQTY':
            let newState = { ...state, ...action.payload }
            let key = Object.keys(action.payload)[0]
            if (action.payload[key].purchaseQty === 0) {
                console.log("All units removed.")
                delete newState[key]
            }
            return newState

        case 'CLEAR_CART':
            return {}

        case PURGE:
            console.log("PURGING!");
            return {}
        default:
            return state;
    }
}