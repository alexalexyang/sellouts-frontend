import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { PURGE } from 'redux-persist';


export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let total = 0

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total
                        }
                    }]
                });
            }
        }).render('#paypal-button-container')
    }, [total])

    let productKeys = Object.keys(cart)
    const loadProducts = () => {
        return productKeys.map(key => {
            console.log(`Fresh cart: `, cart)
            console.log(`Purchase name: ${cart[key].name}`)
            console.log(`Purchase QTY: ${cart[key].purchaseQuantity}`)
            let productPrice = cart[key].purchaseQuantity * cart[key].price
            let productDiscount = 0
            if (cart[key].discount > 0) {
                productDiscount = cart[key].discount
            }
            total += Math.round(productPrice * (100 - productDiscount) / 100)
            return (
                <>
                    <p>{cart[key].name}</p>
                    <p>Price: ${cart[key].price}</p>
                    <p>Discount: {cart[key].discount}%</p>
                    <p>Qty: {cart[key].purchaseQuantity}</p>
                    <p>Category: {cart[key].category}</p>
                    <p>Subcategory: {cart[key].subcategory}</p>

                    <button
                        onClick={() => {
                            let pickedProduct = { key: cart[key] }
                            // pickedProduct[key] = cart[key]
                            console.log(`pickedProduct: `, pickedProduct)
                            dispatch(increment(pickedProduct))
                        }}>+</button>
                    <button
                        onClick={() => {
                            let pickedProduct = { key: cart[key] }
                            // pickedProduct[key] = cart[key]
                            console.log(pickedProduct)
                            dispatch(decrement(pickedProduct))
                        }}>-</button>
                    <button
                        onClick={() =>
                            dispatch({
                                type: PURGE,
                                key: "root",
                                result: () => null  // Func expected on the submitted action. 
                            })
                        }>purge</button>

                </>
            )
        })
    }

    return (
        <div>
            <h1>Cart</h1>
            {loadProducts()}



            <p>Total: {total}</p>

            <div id="paypal-button-container"></div>

        </div>
    )
}
