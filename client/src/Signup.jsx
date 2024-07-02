// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {
            username,
            password,
            email,
            role: 'user',
            firstName,
            lastName,
            address: {
                street,
                city,
                state,
                zip,
                country
            }
        }).then(response => {
            console.log(response.data);
            navigate('/login');
        }).catch(error => {
            console.error('Error al enviar formulario:', error);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required autoComplete="off" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="street" className="form-label">Street:</label>
                                    <input type="text" className="form-control" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Enter your street" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City:</label>
                                    <input type="text" className="form-control" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State:</label>
                                    <input type="text" className="form-control" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter your state" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="zip" className="form-label">Zip Code:</label>
                                    <input type="text" className="form-control" id="zip" name="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Enter your zip code" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country:</label>
                                    <input type="text" className="form-control" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter your country" required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                            <p className="text-center mt-3">Already have an account?</p>
                            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
