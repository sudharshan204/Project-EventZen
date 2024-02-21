import React from 'react';
import b from '../Images/birth2.jpg';
import './Birthday.css'; // Import the CSS file
import BdaySlide from './BdaySlide';
import { useNavigate } from 'react-router-dom';
const Birthday = () => {
  const navigate=useNavigate();
  const Click = () =>
  {
      navigate('/book')
  }
  return (
    <>
      <div className="image-container">
        <img src={b} height={"600px"} width={"1200px"} alt="Birthday Celebration" />
      </div>
      <center>
        <div className="content-container">
          <h3 style={{color:'white'}}>
            Celebrating a milestone of success, our event management company takes great pride in the countless memorable
            birthdays we've orchestrated with precision and flair. Each event stands as a testament to our commitment to
            creating unparalleled experiences, blending creativity and seamless execution. From intimate gatherings to
            grand celebrations, our team has seamlessly woven dreams into reality, ensuring that every birthday is a
            unique and joyous occasion. As we reflect on the numerous events we've brought to life, we're not just tallying
            numbers; we're measuring the laughter, the shared moments, and the delighted smiles that have marked our journey.
            Cheers to the past and the countless more birthdays to come!
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center>
          <BdaySlide/>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="book-now-btn" onClick={Click}>BOOK NOW</button>
        </div>
      </center>
    </>
  );
}

export default Birthday;
