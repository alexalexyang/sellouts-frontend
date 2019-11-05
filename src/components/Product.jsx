import React, { useState, useEffect } from 'react'
import { ContentfulClient } from './ContentfulClient'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { PURGE } from 'redux-persist';

export default function Product({ match }) {
    const itemID = match.params.id

    let [product, setProduct] = useState({})

    useEffect(() => {
        ContentfulClient.getEntry(itemID)
            .then(item => {
                setProduct(item.fields)
                return item;
            })
    }, [itemID])

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>A Single Product</h1>
            <p>ID is {itemID}</p>


            <h2 className="card-title text-muted text-uppercase text-center">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}%</p>
            <p>Qty: {product.quantity}</p>
            <p>Category: {product.category}</p>
            <p>Subcategory: {product.subcategory}</p>
            {product.pictures ?
                product.pictures.map(pic => (
                    <img src={`https://` + pic.fields.file.url} alt={pic.fields.description} width="150" />
                ))
                : console.log(`Product pic not found.`)}

            {/* <p>{cart}</p> */}

            <button
                onClick={() => {
                    let pickedProduct = {}
                    pickedProduct[itemID] = product
                    dispatch(increment(pickedProduct))
                }}>+</button>
            <button
                onClick={() => {
                    let pickedProduct = {}
                    pickedProduct[itemID] = product
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
        </div >
    )
}
