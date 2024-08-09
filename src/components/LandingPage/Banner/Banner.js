import React from 'react';
import './Banner.css';


function Banner() {
  return (
    <>
    <div className='banner-container'>
      <div className='banner'>
        <img 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52097081/original/f01331ae-a2c9-44a3-8c72-c210eb2f3b04.png?im_w=960" 
          alt="Banner Background" 
          className='banner-image'
        />
        <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
