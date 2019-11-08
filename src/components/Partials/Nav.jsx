import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


export default function Nav() {
    // const cart = useSelector(state => state.cart)

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="d-flex flex-grow-1">
                <Link to={`/`} className="navbar-brand" alt="Brand logo">
                    Honk
                    </Link>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item">
                        <Link to={`/cart`} className="nav-link m-2 menu-item nav-active">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
