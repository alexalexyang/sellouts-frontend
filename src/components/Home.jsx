import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useGetPageDetails } from '../DBHandlers/GetPageDetails';
import GetFeatured from '../DBHandlers/GetFeatured';
import PageBanner from './Partials/PageBanner'

export default function Home({ match }) {
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(match.path, setPageDetails)
    const [products, setProducts] = useState({})
    GetFeatured(setProducts)
    console.log("Home", products)
    let prodKeys = Object.keys(products)

    return (
        <div className="Home">
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
                                <div className="card-body">
                                    <h2 className="card-title text-muted text-uppercase text-center">{products[prodKey].name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Divider container">
                <hr className="my-4" />
            </div>
            <div className="HomeBody text-justify px-5">
                <p className="text-muted" dangerouslySetInnerHTML={{ __html: pageDetails.body }}></p>
            </div>
        </div>
    )
}
