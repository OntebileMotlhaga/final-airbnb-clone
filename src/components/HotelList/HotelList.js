import React from 'react';
import './HotelList.css';
import StarIcon from '@mui/icons-material/Star';

const HotelList = () => {
  const hotels = [
    {
      name: "Bushveld Haven in Pretoria",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1172388774432617101/original/3a5e4b91-b3de-44f2-91fb-c368cd269275.jpeg?im_w=960",
      description: "2 Room Bedroom",
      details: "4-6 guests · Entire Home · 3 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 10.0,
      reviews: 198,
      price: 735
    },
    {
      name: "Regency 1 Bedroom Executive Apartments",
      image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-821581541691701137/original/55e00fb9-8cfc-47e7-a49d-2306f4ad3d0b.jpeg?im_w=960",
      description: "Entire Apartment in Regency",
      details: "4 guests · Entire Home · 2 beds · 1 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 898,
      price: 600
    },
    {
      name: "The Blyde Pretoria Beach Unit",
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1191312122999553843/original/9bab1d9a-d508-46ab-8e05-c6c324e3f13a.jpeg?im_w=960",
      description: "Entire unit in The Blyde",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 358,
      price: 1235
    }
  ];

  return (
    <div className="hotel-list">
      <h2>My Hotel List</h2>
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.description}</h3>
            <h2>{hotel.name}</h2>
            <p>{hotel.details}</p>
            <div className="hotel-rating">
              <StarIcon className="star-icon" /> {hotel.rating} ({hotel.reviews} reviews)
            </div>
            <div className="hotel-price">${hotel.price} /night</div>
          </div>
          <div className="hotel-actions">
            <button className="update-button">Update</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
