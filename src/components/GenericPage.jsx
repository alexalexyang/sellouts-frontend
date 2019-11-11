import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetPageDetails } from '../DBHandlers/GetPageDetails';
import PageBanner from './Partials/PageBanner'

export default function GenericPage({ match }) {
    const language = useSelector(state => state.language)
    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(match.path, setPageDetails)

    return (
        <div className="GenericPage">
            <PageBanner title={pageDetails.bannerTitle} caption={pageDetails.bannerText} />
            <div className="GenericPageBody px-5 text-justify" dangerouslySetInnerHTML={{ __html: pageDetails.body }}>

            </div>
        </div>
    )
}
