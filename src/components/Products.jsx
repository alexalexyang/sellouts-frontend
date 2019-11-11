import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from './Partials/PageBanner'
import { useGetPageDetails } from '../DBHandlers/GetPageDetails';
import GetProducts from '../DBHandlers/GetProducts'
import { useSelector } from 'react-redux';
require('dotenv').config()

export default function Products({ match }) {
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(match.path, setPageDetails)
    const products = useSelector(state => state.products);
    let prodKeys = Object.keys(products)
    GetProducts()

    return (
        <div className="Page">
            <div className="ProductsPage">
                <PageBanner title={pageDetails.bannerTitle} caption={pageDetails.bannerText} />
                <div className="Products container-fluid">
                    <div className="d-flex align-content-stretch justify-content-center flex-column flex-md-row">
                        {prodKeys.map(prodKey => (
                            <div className="ProductCard card w-100 mx-0 my-0 mx-sm-4 my-sm-2" key={prodKey}>
                                <Link to={`/product/${products[prodKey].sku}`}>
                                    {products[prodKey].pics.length > 0 ?
                                        <img className="AppImage card-img-top"
                                            src={`https://` + products[prodKey].pics[0].url}
                                            alt={products[prodKey].pics[0].description}
                                            key={products[prodKey].pics[0].id}
                                        />
                                        : <h5 className="NoPic text-muted text-uppercase text-center">No pic found.</h5>}
                                    {pageDetails.misc && Object.keys(pageDetails.misc).length > 0 ?
                                        (
                                            <div className="card-body">
                                                <h2 className="card-title text-muted text-uppercase text-center">{products[prodKey].name}</h2>
                                                <p className="card-text">{pageDetails.misc.price}: ${products[prodKey].price}</p>
                                                {products[prodKey].discount && products[prodKey].discount > 0 ? <p className="card-text">{pageDetails.misc.discount}: {products[prodKey].discount}%</p> : null}
                                                <p className="card-text">{pageDetails.misc.stock}: {products[prodKey].quantity}</p>
                                                <p className="card-text">{pageDetails.misc.category}: {products[prodKey].category}</p>
                                                <p className="card-text">{pageDetails.misc.subcategory}: {products[prodKey].subcategory}</p>
                                            </div>
                                        ) : null}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
