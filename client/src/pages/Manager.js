import React from 'react';
import { Link } from 'react-router-dom';
import './Manager.css';

const Manager = () => {
    return (
        <div className="manager-page">
            {/* Hero section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Manager Dashboard</h1>
                    <p className="hero-subtitle">Welcome to the Manager Dashboard</p>
                    <div className="hero-buttons">
                        <Link to="/reservations" className="btn btn-primary">View Reservations</Link>
                        <Link to="/contact_view" className="btn btn-primary">View Contacts</Link>
                        <Link to="/menu" className="btn btn-outline">Manage Menu</Link>
                        <Link to="/staff" className="btn btn-primary">Staff Management</Link>
                    </div>
                </div>
            </section>
        </div>
    );
    };

export default Manager;