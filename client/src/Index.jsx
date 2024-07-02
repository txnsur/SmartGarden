import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2 className="card-title">Welcome to Smart Garden</h2>
                            <p className="card-text">Please sign in or register to continue.</p>
                            <div className="d-grid gap-2">
                                <Link to="/login" className="btn btn-primary">Login</Link>
                                <Link to="/register" className="btn btn-secondary">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
