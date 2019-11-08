import React, { useState, useEffect } from 'react'
import * as emailjs from 'emailjs-com'
import { useDispatch, useSelector } from 'react-redux';
import { ContentfulClient } from './ContentfulClient'
import { PaypalButtons } from './Paypal'
import Carousel from './Carousel'
import UpdateUnits from './UpdateUnits'
import ShippingAddress from './ShippingAddress'
import { clearCart } from './actions'

// ContentfulClient.getEntries({
//     content_type: 'products',
//     'fields.subcategory[in]': 'punk',
//     select: 'sys.id,fields.quantity'
// })
//     .then((response) => console.log(response.items))
//     .catch(console.error)

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const shippingAddress = useSelector(state => state.shippingAddress)
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
                    <hr className="my-4" />
                </div >
            )
        })
    }

    const [paidFor, setPaidFor] = useState(false);
    useEffect(() => {
        PaypalButtons(total, setPaidFor)
    }, [total])

    if (paidFor) {
        console.log(paidFor);
        //     ContentfulClient.getEntry(''))
        // .then((entry) => {
        //     entry.fields.quantity['en-US'] = 'New entry title'
        //     return entry.update()
        // })
        // .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
        // .catch(console.error)
        console.log(shippingAddress);

        let templateParams = {
            to_email: shippingAddress.email,
            to_name: shippingAddress.name,
            subject: "Sell-outs Club: thanks for your purchase!",
            message_html: `
            <p>Your purchases will be sent to:<p/>
            <p>${shippingAddress.name}</p>
            <p>${shippingAddress.street}</p>
            <p>${shippingAddress.city}</p>
            <p>${shippingAddress.state}</p>
            <p>${shippingAddress.code}</p>
            <p>${shippingAddress.country}</p>
            `
        }
        emailjs.send(
            'sellouts',
            'template_BQKDmYkq_clone',
            templateParams,
            'user_RS20HxG9I7TuWTn6mqw7C'
        )
            .then(result => console.log(result))
            .catch(err => console.log(err))


        // {dispatch(clearCart())}
        // dispatch({
        //     type: PURGE,
        //     key: "root",
        //     result: () => null
        // })

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
            <h5>Total: ${total}</h5>

            <hr className="my-4" />

            <ShippingAddress />

            <hr className="my-4" />

            <div className="container" id="paypal-button-container"></div>
        </div>
    )
}
