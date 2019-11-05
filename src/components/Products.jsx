import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContentfulClient } from './ContentfulClient'
require('dotenv').config()

export default function Products() {

    let [products, setProducts] = useState([])

    useEffect(() => {
        ContentfulClient.getEntries({
            content_type: "products"
        }).then(({ items }) => {
            setProducts(items)
            return items;
        })
    }, [])

    return (
        <div className="container">
            <h1>Products</h1>

            <div className="row">
                {products.map(product => (
                    <Link to={`/product/${product.sys.id}`}>
                        <div className="card" key={product.sys.id}>
                            <h2 className="card-title text-muted text-uppercase text-center">{product.fields.name}</h2>
                            <p>Price: ${product.fields.price}</p>
                            <p>Discount: {product.fields.discount}%</p>
                            <p>Qty: {product.fields.quantity}</p>
                            <p>Category: {product.fields.category}</p>
                            <p>Subcategory: {product.fields.subcategory}</p>
                            {product.fields.pictures ?
                                product.fields.pictures.map(pic => (
                                    <img src={`https://` + pic.fields.file.url} alt={pic.fields.description} width="150" />
                                ))
                                : console.log(false)}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}
