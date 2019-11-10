import { combineReducers } from 'redux';
import { cart, cartTotal } from './cart';
import { products } from './products';
import { shippingAddress } from './shippingAddress';
import { pages } from './pages'
import { language, languages } from './language'


const allReducers = combineReducers({
    language,
    languages,
    pages,
    cart,
    cartTotal,
    products,
    shippingAddress
})

export default allReducers;