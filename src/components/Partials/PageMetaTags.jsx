import React from 'react'
import { Helmet } from 'react-helmet';

export default function PageMetaTags({ title, description }) {
    return (
        <div className="MetaTags">
            <Helmet>
                <title>{title}</title>
                <meta name="title" property="og:title" content={title} />
                <meta name="type" property="og:type" content="product" />
                <meta name="description" property="og:description" content={description} />
                {/* <meta name="twitter:card" content="summary_large_image"></meta> */}
            </Helmet>
        </div>
    )
}
