import React from 'react';
import img from "../Images/a2.avif"
import EventCard1 from './EventCard1';
import EventCard2 from './EventCard2'; 
import EventCard3 from './EventCard3'; 
import EventCard4 from './EventCard4';
import '../Home/Home.css'

const Home = () => {
  
  return (
    <>
    <div>
      <center>
        <h1 style={{color:"white"}}>Welcome to EventZen</h1>
        <img src={img} width={700}style={{borderRadius:'20px'}}></img>
        <br></br>
        <br></br>
        <h1 style={{color:"white"}}>Transforming Your Vision into Unforgettable Moments. Where Every Celebration Finds Perfect Harmony</h1>

        <br></br>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C59ViBJSyhU?si=hmeukmRUiF5pAKrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p style={{color:'white',fontSize:25}}>100+ successful events and countless memories made</p>
      </center>
      <br></br>
      <br></br>
      <br></br>
       <div class="ab"> 
       <span>
       <EventCard1/>
       </span>
       <span style={{paddingLeft:'50px',height:'300px'}}>
       <EventCard2/>
       </span>
       <span style={{paddingLeft:'50px',height:'300px'}}>
        <EventCard3/>
       </span>
       <span style={{paddingLeft:'50px'}}>
        <EventCard4/>
        </span>
       </div>
    </div>
    </>
  )
}

export default Home