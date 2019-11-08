import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAddress } from '../StateHandlers/actions';

function ShippingAddress(props) {
    const dispatch = useDispatch();
    const [address, setAddress] = useState({})
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getAddress(address))
        props.history.replace('/payment')
    }

    return (
        <div className="text-muted text-left mx-5">
            <h2>Shipping Address</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Street</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="street"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>City</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>State</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="state"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Postal code</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="code"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Country</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="country"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Phone no.</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={handleChange} required />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default withRouter(ShippingAddress)