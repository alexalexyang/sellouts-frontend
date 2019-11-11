import React, { useState } from 'react'
import PageBanner from './Partials/PageBanner';
import Carousel from './Partials/Carousel';
import PageMetaTags from './Partials/PageMetaTags';
import UpdateUnits from './UpdateUnits';
import { useGetPageDetails } from '../DBHandlers/GetPageDetails';
import GetOneProduct from '../DBHandlers/GetOneProduct'

export default function Product(props) {
    const itemID = props.match.params.id
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(props.match.path, setPageDetails)
    const [product, setProduct] = useState({})
    GetOneProduct(itemID, setProduct)

    return (
        <div cassName="Page">
            <PageMetaTags title={product.name} description={product.description} />
            <div key={itemID} className="ProductInfo">
                <PageBanner title={product.name} caption={pageDetails.bannerText} />
                <div className="ProductInfoRow row">
                    <div className="ProductPics col-sm-6 col-12">
                        <Carousel pics={product.pics} />
                    </div>
                    <div className="ProductText d-flex flex-column col-sm-6 col-12">
                        {pageDetails.misc && Object.keys(pageDetails.misc).length > 0 ?
                            (
                                <div className="ProductText mt-3 mt-sm-0 mb-4 px-4">
                                    <p className="text-muted text-justify" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    <p className="text-muted text-sm-left text-center">{pageDetails.misc.price}: ${product.price}</p>
                                    {product.discount && product.discount > 0 ? <p className="text-muted text-sm-left text-center">{pageDetails.misc.discount}: {product.discount}%</p> : null}
                                    <p className="text-muted text-sm-left text-center">{pageDetails.misc.stock}: {product.stock}</p>
                                    <p className="text-muted text-sm-left text-center">{pageDetails.misc.category}: {product.category}</p>
                                    <p className="text-muted text-sm-left text-center">{pageDetails.misc.subcategory}: {product.subcategory}</p>
                                </div>
                            ) : null}
                        <UpdateUnits itemID={itemID} product={product} />
                    </div>
                    <div className="container text-center">
                        <hr className="my-4" />
                        <button className="btn btn-outline-secondary" onClick={() => {
                            props.history.replace('/cart')
                        }}>Go to cart</button>
                    </div>
                </div >
            </div >
        </div>
    )
}
