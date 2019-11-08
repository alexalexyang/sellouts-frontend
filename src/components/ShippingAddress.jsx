import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAddress } from './actions';

export default function ShippingAddress() {
    // const shippingAddress = useSelector(state => state.shippingAddress)
    const dispatch = useDispatch();
    const [address, setAddress] = useState({})

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setAddress({ ...address, [e.target.name]: e.target.value })
        dispatch(getAddress({ ...address, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(address)
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
            </form>
        </div>
    )
}
