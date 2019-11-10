import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PURGE } from 'redux-persist';
import { useGetPageDetails } from '../../DBHandlers/GetPageDetails';
import PageBanner from '../Partials/PageBanner';

export default function Success(props) {
    const dispatch = useDispatch();
    dispatch({
        type: PURGE,
        key: "root",
        result: () => null
    })

    const [pageDetails, setPageDetails] = useState({})
    useGetPageDetails(props.match.path, setPageDetails)


    return (
        <div className="Success">
            <PageBanner title={pageDetails.bannerTitle} caption={pageDetails.bannerText} />
        </div>
    )
}
