import { PURGE } from 'redux-persist';
import { combineReducers } from 'redux';


export const cart = (state = {}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(`Current state: `, state)
            let incrementKey = Object.keys(action.payload)[0]
            state[incrementKey] ?
                action.payload[incrementKey].purchaseQuantity = state[incrementKey].purchaseQuantity + 1
                : action.payload[incrementKey].purchaseQuantity = 1
            console.log(`Qty increased to: `, action.payload[incrementKey].purchaseQuantity)
            return { ...state, ...action.payload, }
        case 'DECREMENT':
            let decrementKey = Object.keys(action.payload)[0]
            console.log(state)
            if (state[decrementKey]) {
                if (state[decrementKey].purchaseQuantity === 0) {
                    console.log(`Qty is zero`)
                    delete state[decrementKey]
                    console.log(`Current state: `, state)
                    return state
                }
                action.payload[decrementKey].purchaseQuantity = state[decrementKey].purchaseQuantity - 1
                console.log(`Qty decreased to: `, action.payload[decrementKey].purchaseQuantity)
                return { ...state, ...action.payload, }
            }
            return state

        case PURGE:
            console.log("PURGING!");
            return {}
        default:
            return state;
    }
}

const allReducers = combineReducers({
    cart
})

export default allReducers;