import { cart } from './cart';
import { products } from './products';
import { shippingAddress } from './shippingAddress';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    cart,
    products,
    shippingAddress
})

export default allReducers;