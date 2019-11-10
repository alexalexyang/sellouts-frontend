import React, { useState } from 'react';
import { useGetPageDetails } from '../DBHandlers/GetPageDetails';

export default function Home({ match }) {
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(match.path, setPageDetails)

    return (
        <div className="jumbotron">
            <h1 className="display-1">{pageDetails.bannerTitle}</h1>
            <p className="lead">{pageDetails.bannerText}</p>
            <hr className="my-4" />

        </div >
    )
}
