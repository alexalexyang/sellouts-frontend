import React from 'react'

export default function PageBanner({ title, caption }) {
    return (
        <div className="PageBanner jumbotron text-center">
            <h1 className="display-1">{title}</h1>
            <p className="lead">{caption}</p>
        </div>
    )
}
