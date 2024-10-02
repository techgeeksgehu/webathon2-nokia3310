import React from 'react';
import Navbar from './component/Nav';
import GetStarted from './component/GetStarted';
import Marquee from './component/Marquee';
import OurServices from './component/OurServices';
import ThreeContainers from './component/ThreeContainer';
import Footer from './component/Footer';
import ContactForm from './component/ContactMail';
import Team from './component/Team';

function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar />
      <GetStarted />
      <Marquee  />
      <OurServices />
      <ThreeContainers />
      <ContactForm />
      <Footer />
      
    </div>
  );
}

export default Home;