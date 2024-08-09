import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  const [filters, setFilters] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guests: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    if (name === 'location') {
      navigate(value);
    }
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="/" disabled>Select Hotel</option>
            <option value="/admin/02">South Africa's Hotel</option>
            <option value="/admin/02">Pretoria East</option>
            <option value="/admin/02">Durban</option>
          </select>
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="text"
            name="checkInDate"
            value={filters.checkInDate}
            onChange={handleChange}
            placeholder="Add dates"
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="text"
            name="checkOutDate"
            value={filters.checkOutDate}
            onChange={handleChange}
            placeholder='Add dates'
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="text"
            name="guests"
            value={filters.guests}
            onChange={handleChange}
            placeholder="Add guests"
          />
        </div>
        <button className='search-button' onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
