import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from './Partials/PageBanner'
import GetProducts from '../DBHandlers/GetProducts'
import { useSelector } from 'react-redux';
require('dotenv').config()

export default function Products() {
    GetProducts()

    const products = useSelector(state => state.products);
    let prodKeys = Object.keys(products)

    return (
        <div className="">
            <PageBanner title="Products" caption="Such great products." />
            <div className="Products container-fluid">
                <div className="d-flex align-content-stretch justify-content-center flex-column flex-md-row">
                    {prodKeys.map(prodKey => (
                        <div className="ProductCard card w-100 mx-0 my-0 mx-sm-4 my-sm-2" key={prodKey}>
                            <Link to={`/product/${prodKey}`}>
                                {products[prodKey].pics.length > 0 ?
                                    <img className="card-img-top"
                                        src={`https://` + products[prodKey].pics[0].url}
                                        alt={products[prodKey].pics[0].description}
                                        key={products[prodKey].pics[0].id}
                                    />
                                    : <h5 className="NoPic text-muted text-uppercase text-center">No pic found.</h5>}
                                <div className="card-body">
                                    <h2 className="card-title text-muted text-uppercase text-center">{products[prodKey].name}</h2>
                                    <p className="card-text">Price: ${products[prodKey].price}</p>
                                    <p className="card-text">Discount: {products[prodKey].discount}%</p>
                                    <p className="card-text">Qty: {products[prodKey].quantity}</p>
                                    <p className="card-text">Category: {products[prodKey].category}</p>
                                    <p className="card-text">Subcategory: {products[prodKey].subcategory}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
