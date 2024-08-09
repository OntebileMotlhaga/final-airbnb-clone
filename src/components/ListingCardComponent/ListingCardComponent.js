import React from 'react';
import './ListingCardComponent.css';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import KeyIcon from '@mui/icons-material/VpnKey';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';

const ListingCardComponent = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="listing-card-component">
      <div className="listing-left">
        <div className="listing-details">
          <h3>Entire rental unit hosted by Ghazal</h3>
          <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
        </div>

        <div className="listing-features">
          <div className="feature-item">
            <HomeIcon />
            <p>Entire home</p>
            <span>You'll have the apartment to yourself</span>
          </div>
          <div className="feature-item">
            <CleanHandsIcon />
            <p>Enhanced Clean</p>
            <span>This Host committed to Airbnb's 5-step enhanced cleaning process.</span>
          </div>
          <div className="feature-item">
            <KeyIcon />
            <p>Self check-in</p>
            <span>Check yourself in with the keypad.</span>
          </div>
          <div className="feature-item">
            <CalendarTodayIcon />
            <p>Free cancellation before Feb 14</p>
          </div>
        </div>

        <div className="listing-description">
          <p>Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44...</p>
        </div>

        <div className="listing-actions">
        
          <button className="share-button"><ShareIcon /> Share</button>
          <button className="save-button"><FavoriteBorderIcon /> Save</button>
        </div>
      </div>

      <div className="listing-right">
        <div className="reservation-card">
          <div className="price">
            <h3>$75 / night</h3>
            <div className="rating">
              <StarIcon className="star-icon" />
              <p>5.0 · 7 reviews</p>
            </div>
          </div>

          <div className="reservation-details">
            <div className="date-picker">
              <div>
                <p>CHECK-IN</p>
                <input type="date" />
              </div>
              <div>
                <p>CHECKOUT</p>
                <input type="date" />
              </div>
            </div>
            <div className="guests-picker">
              <p>GUESTS</p>
              <input type="number" min="1" max="10" defaultValue="2" />
            </div>
          </div>
          <Link to="/reservationsListPages">
          <button className="reserve-button">Reserve</button>
          </Link>
          <div className="pricing-breakdown">
            <div className="pricing-item">
              <p>$79 x 7 nights</p>
              <p>$555</p>
            </div>
            <div className="pricing-item">
              <p>Weekly discount</p>
              <p>-$28</p>
            </div>
            <div className="pricing-item">
              <p>Cleaning fee</p>
              <p>$62</p>
            </div>
            <div className="pricing-item">
              <p>Service fee</p>
              <p>$83</p>
            </div>
            <div className="pricing-item">
              <p>Occupancy taxes and fees</p>
              <p>$29</p>
            </div>
            <div className="pricing-item total">
              <p>Total</p>
              <p>$701</p>
            </div>
          </div>
          <div className="report-listing">
            <FlagIcon />
            <a href="#">Report this listing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardComponent;
