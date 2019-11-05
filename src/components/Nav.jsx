import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Nav() {
    const cart = useSelector(state => state.cart)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`/`} className="navbar-brand">Honk</Link>
            <span>
                <Link to={`/cart`}>Cart</Link>:
            </span>
        </nav>
    )
}
