import React from 'react'
import { useDispatch } from 'react-redux'
import { PURGE } from 'redux-persist';

export default function Success() {
    const dispatch = useDispatch();
    dispatch({
        type: PURGE,
        key: "root",
        result: () => null
    })
    return (
        <div>
            <h1>Transaction successful!</h1>
        </div>
    )
}
