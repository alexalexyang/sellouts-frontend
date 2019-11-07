import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePurchaseQty } from './actions';

export default function UpdateUnits({ itemID, product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const cartProduct = cart[itemID]

    return (
        <div className="UpdatePurchaseQty mt-auto">
            <p className="text-muted text-sm-left text-center">Cart: <input
                type="number"
                id={`purchaseUnits-${itemID}`}
                className="PurchaseQtyInput"
                placeholder={cartProduct ? `current value: ${cartProduct.purchaseQty}` : `Product not in basket`}
                value={cartProduct ? cartProduct.purchaseQty : 0}
                min="0"
                max={product.stock}
                onChange={
                    () => {
                        let pickedProduct = {}
                        pickedProduct[itemID] = product
                        pickedProduct[itemID]["purchaseQty"] = Number(document.getElementById(`purchaseUnits-${itemID}`).value)
                        dispatch(updatePurchaseQty(pickedProduct))
                    }
                }>
            </input> units
            </p>
        </div >
    )
}
