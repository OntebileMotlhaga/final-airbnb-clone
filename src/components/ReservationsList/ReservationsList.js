import React from 'react';
import './ReservationsList.css';

const ReservationsList = () => {
  const reservations = [
    {
      bookedBy: "Ontebile Motlhaga",
      property: "Property 1",
      checkin: "9/08/2024",
      checkout: "12/08/2024"
    },
    {
      bookedBy: "Ontla Motlhaga",
      property: "Property 2",
      checkin: "19/08/2024",
      checkout: "20/08/2024"
    },
    {
      bookedBy: "Marang Motlhaga",
      property: "Property 1",
      checkin: "25/08/2024",
      checkout: "30/08/2024"
    }
  ];

  return (
    <div className="reservations-list">
      <h2>My Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkin}</td>
              <td>{reservation.checkout}</td>
              <td>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;
