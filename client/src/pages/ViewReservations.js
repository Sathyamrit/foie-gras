import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewReservations.css';

const ViewReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reservations');
            setReservations(response.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    return (
        <div className="reservations-page">
            <h2>All Reservations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                        <th>Occasion</th>
                        <th>Requests</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((res, index) => (
                        <tr key={index}>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>{res.date}</td>
                            <td>{res.time}</td>
                            <td>{res.guests}</td>
                            <td>{res.occasion}</td>
                            <td>{res.specialRequests}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewReservations;
