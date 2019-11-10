import React from 'react'
import * as emailjs from 'emailjs-com'

export const OnPayment = (cart, shippingAddress, props) => {

    let prodKeys = Object.keys(cart)
    function cartProducts() {
        prodKeys.map(key => {
            return (
                <div>
                    <p>ID: {key}</p>
                    <p>Product name: {cart[key].name}</p>
                    <p>Purchase Qty: {cart[key].purchaseQty}</p>
                </div>
            )
        })
    }

    // if (paidFor) {
    //     console.log(paidFor);

    // Update entry
    // ContentfulClient.getEntry('<entry_id>')
    // .then((entry) => {
    //   entry.fields.title['en-US'] = 'New entry title'
    //   return entry.update()
    // })
    // .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    // .catch(console.error)

    let templateParams = {
        to_email: shippingAddress.email,
        to_name: shippingAddress.name,
        subject: "Sell-outs Club: thanks for your purchase!",
        message_html: `
            <p>Your purchases will be sent to:<p/>
            ${shippingAddress.name} <br />
            ${shippingAddress.street} <br />
            ${shippingAddress.city} <br />
            ${shippingAddress.state} <br />
            ${shippingAddress.code} <br />
            ${shippingAddress.country} <br />
    
            <p>You bought:</p>

            ` + cartProducts()
    }

    // emailjs.send(
    //     'sellouts',
    //     'template_BQKDmYkq_clone',
    //     templateParams,
    //     'user_RS20HxG9I7TuWTn6mqw7C'
    // )
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err))

    // {dispatch(clearCart())}


    props.history.replace('/cart/success');
}
// }
