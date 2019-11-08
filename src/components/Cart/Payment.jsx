import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OnPayment } from './OnPayment'
import { withRouter } from 'react-router-dom'

function Payment(props) {
    const shippingAddress = useSelector(state => state.shippingAddress);
    const cart = useSelector(state => state.cart);
    const cartTotal = useSelector(state => state.cartTotal)
    const [paidFor, setPaidFor] = useState(false);

    const paypalButtons = () => {
        window.paypal.Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: cartTotal
                        }
                    }]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                setPaidFor(true);
            },
            onError: err => {
                console.log(err);
            },
        }).render('#paypal-button-container')
            .catch(err => console.log(err))
    }

    useEffect(() => paypalButtons(), [])

    OnPayment(paidFor, cart, shippingAddress, props)

    return (
        <div className="container" id="paypal-button-container"></div>

    )
}

export default withRouter(Payment)