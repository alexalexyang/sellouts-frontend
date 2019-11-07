import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { PURGE } from 'redux-persist';
import { ContentfulClient } from './ContentfulClient'
import { paypalButtons } from './Paypal'
import Carousel from './Carousel'
import UpdateUnits from './UpdateUnits'

// ContentfulClient.getEntries({
//     content_type: 'products',
//     'fields.subcategory[in]': 'punk',
//     select: 'sys.id,fields.quantity'
// })
//     .then((response) => console.log(response.items))
//     .catch(console.error)

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [productStock, setProductStock] = useState({})

    let total = 0

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: 'products',
            select: 'sys.id,fields.quantity'
        })
            .then((response) => {
                let productsObj = {}
                response.items.map(item => {
                    productsObj[item.sys.id] = item.fields.quantity
                    return item
                })
                setProductStock(productsObj)
                return response.items
            })
            .catch(console.error)
    }, [])

    let prodKeys = Object.keys(cart)
    const loadProducts = () => {
        return prodKeys.map(key => {
            if (cart[key].purchaseQty > productStock[key]) {
                console.log("Too little in store, setting to maximum.")
                cart[key].purchaseQty = productStock[key]
            }

            let productPrice = cart[key].purchaseQty * cart[key].price
            let productDiscount = 0
            if (cart[key].discount > 0) {
                productDiscount = cart[key].discount
            }
            total += Math.round(productPrice * (100 - productDiscount) / 100)

            return (
                <>
                    <div key={key} className="CartProductInfo">
                        <div className="CartProductInfoRow row">
                            <div className="CartProductPics col-sm-6 col-12">
                                <Carousel pics={cart[key].pics} />
                            </div>
                            <div className="CartProductText d-flex flex-column col-sm-6 col-12 px-4">
                                <div className="ProductText mt-3 mt-sm-0 mb-4">
                                    <p className="text-muted text-sm-left text-center">{cart[key].name}</p>
                                    <p className="text-muted text-sm-left text-center">Price: ${cart[key].price}</p>
                                    {cart[key].discount ? <p className="text-muted text-sm-left text-center">Discount: {cart[key].discount}%</p> : console.log("No discount.")}
                                    <p className="text-muted text-sm-left text-center">Stock: {cart[key].stock}</p>
                                </div>
                                <UpdateUnits itemID={key} product={cart[key]} />
                            </div>
                        </div >
                    </div >
                    <hr className="my-4" />
                </>
            )
        })
    }




    // Check quantities.
    // Console.log if less than picked quantities AND if no more.
    // Update picked quantities to nearest remaining maximum.

    // ContentfulClient.getSpace('<99cqxxa8jb8b>')
    // .then((space) => space.getEntry(''))
    // .then((entry) => {
    //     entry.fields.quantity['en-US'] = 'New entry title'
    //     return entry.update()
    // })
    // .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    // .catch(console.error)

    const [paidFor, setPaidFor] = useState(false);
    useEffect(() => paypalButtons(total, paidFor, setPaidFor)
        , [total])

    if (paidFor) {

        //     ContentfulClient.getEntry(''))
        // .then((entry) => {
        //     entry.fields.quantity['en-US'] = 'New entry title'
        //     return entry.update()
        // })
        // .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
        // .catch(console.error)

        return (
            <div>
                <h1>Transaction successful.</h1>
            </div>
        );
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
