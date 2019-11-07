import React from 'react'
import { useSelector } from 'react-redux';
import PageBanner from './PageBanner';
import Carousel from './Carousel';
import UpdateUnits from './UpdateUnits';

export default function Product({ match }) {
    const itemID = match.params.id
    const product = useSelector(state => state.products[itemID])

    return (
        <div key={itemID} className="ProductInfo">
            <PageBanner title={product.name} />
            <div className="ProductInfoRow row">
                <div className="ProductPics col-sm-6 col-12">
                    <Carousel pics={product.pics} />
                </div>
                <div className="ProductText d-flex flex-column col-sm-6 col-12 px-4">
                    <div className="ProductText mt-3 mt-sm-0 mb-4">
                        <p className="text-muted text-sm-left text-center">{product.description}</p>
                        <p className="text-muted text-sm-left text-center">Price: ${product.price}</p>
                        {product.discount ? <p className="text-muted text-sm-left text-center">Discount: {product.discount}%</p> : console.log("No discount.")}
                        <p className="text-muted text-sm-left text-center">Stock: {product.stock}</p>
                        <p className="text-muted text-sm-left text-center">Category: {product.category}</p>
                        <p className="text-muted text-sm-left text-center">Subcategory: {product.subcategory}</p>
                    </div>
                    <UpdateUnits itemID={itemID} product={product} />
                </div>
            </div >
        </div >
    )
}
