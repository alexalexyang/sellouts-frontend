import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OnPayment } from './OnPayment'
import { withRouter } from 'react-router-dom'
import { useGetPageDetails } from '../../DBHandlers/GetPageDetails';
import PageBanner from '../Partials/PageBanner';

function Payment(props) {
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(props.match.path, setPageDetails)
    const shippingAddress = useSelector(state => state.shippingAddress);
    const cart = useSelector(state => state.cart);
    const cartTotal = useSelector(state => state.cartTotal)

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
                OnPayment(cart, shippingAddress, props)
            },
            onError: err => {
                console.log(err);
            },
        }).render('#paypal-button-container')
            .catch(err => console.log(err))
    }

    useEffect(() => paypalButtons(), [])

    return (
        <div className="Payment">
            <PageBanner title={pageDetails.bannerTitle} caption={pageDetails.bannerText} />
            <div className="container" id="paypal-button-container"></div>
        </div>

    )
}

export default withRouter(Payment)