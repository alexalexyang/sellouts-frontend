import { cart } from './cart';
import { products } from './products';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    cart,
    products
})

export default allReducers;