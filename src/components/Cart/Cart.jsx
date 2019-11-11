import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCartTotal } from '../../StateHandlers/actions'
import { ContentfulClient } from '../../DBHandlers/ContentfulClient'
import { useGetPageDetails } from '../../DBHandlers/GetPageDetails';
import Carousel from '../Partials/Carousel'
import PageBanner from '../Partials/PageBanner';
import UpdateUnits from '../UpdateUnits'

function Cart(props) {
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(props.match.path, setPageDetails)

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const prodKeys = Object.keys(cart)

    const [productStock, setProductStock] = useState({})
    let total = 0

    function saveTotal(total) {
        dispatch(updateCartTotal(total))
    }

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


    return (
        <div className="CartProducts">
            <PageBanner title={pageDetails.bannerTitle} caption={pageDetails.bannerText} />
            {prodKeys.map(key => {
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
                                {pageDetails.misc && Object.keys(pageDetails.misc).length > 0 ?
                                    (
                                        <div className="ProductText mt-3 mt-sm-0 mb-4">
                                            <p className="text-muted text-sm-left text-center">{cart[key].name}</p>
                                            <p className="text-muted text-sm-left text-center">{pageDetails.misc.price}: ${cart[key].price}</p>
                                            {cart[key].discount ? <p className="text-muted text-sm-left text-center">{pageDetails.misc.discount}: {cart[key].discount}%</p> : null}
                                            <p className="text-muted text-sm-left text-center">{pageDetails.misc.stock}: {cart[key].stock}</p>
                                        </div>
                                    ) : null}
                                <UpdateUnits itemID={key} product={cart[key]} />
                            </div>
                        </div >
                        <hr className="my-4" />
                    </div >
                )
            })
            }
            <div className="container text-center">
                <h3>Total: ${total}</h3>

                <hr className="my-4" />

                <button className="btn btn-outline-secondary" onClick={() => {
                    saveTotal(total)
                    props.history.replace('/cart/shipping')
                }}>Go to payment</button>
            </div>
        </div>
    )
}

export default withRouter(Cart)