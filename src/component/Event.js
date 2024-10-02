
import React from "react";
import './Event.css'
import Navbar from "./Nav";

function Event() {
  const photos = [
    { src: "/event1.png", alt: "Hackathon Event 1" },
    { src: "/event2.png", alt: "Hackathon Event 2" },
    { src: "event3.png", alt: "Hackathon Event 3" },
    { src: "/event4.png", alt: "Hackathon Event 4" },
    { src: "/event5.png", alt: "Hackathon Event 5" },
    { src: "/event6.png", alt: "Hackathon Event 5" },
  ];

  return (
    <>
    <Navbar />  
    <div className="event-gallery">
      <h2 style={{marginBottom: '40px', paddingTop: '125px'}}>Hackathon Event Photos</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
            <div style={{marginBottom: '40px'}}>

<h4>Event {index + 1}</h4>
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="event-photo"
          />

          
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Event;