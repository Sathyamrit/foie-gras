import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page">
        <section className="hero">
            <div className="hero-content">
            <h1 className="hero-title">Manager Login</h1>
            <p className="hero-subtitle">Access the Manager Dashboard</p>
            <form className="login-form">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link to="/" className="btn btn-outline">Back to Home</Link>
            </div>
        </section>
        </div>
    );
    }