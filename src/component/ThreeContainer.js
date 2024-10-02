import React from 'react';
import './ThreeContainer.css';
import {MdGroup} from 'react-icons/md';
import {BsGlobeCentralSouthAsia, BsFillTrophyFill} from 'react-icons/bs';


function ThreeContainers(){
    return(
        <>
        <div  id="about-us"style={{marginTop: '40px', backgroundColor: 'grey',}}>
           
        <h1 style={{fontWeight: '700', color: 'white', marginTop: '40px'}}>About</h1>
        
        <div className='three_containers_div' style={{marginTop: '80px'}}>
        <div className="threeContainers" style={{width: '360px', height: '375px', backgroundColor: '#62ade0', color: 'white', padding:'5px'}}>
            <MdGroup size={50} style={{marginTop: '30px'}}/>
            <h2 style={{marginTop: '10px'}}>
                OUR VISION
            </h2>
            <p style={{marginTop: '20px'}}>Our vision is to be the leading force for skill development, innovation, and sustainability in Uttarakhand. We empower entrepreneurs with skills and resources to turn ideas into successful ventures. By fostering continuous learning and innovation, we aim to drive economic growth, promote sustainable practices, and create a vibrant entrepreneurial ecosystem for a prosperous future.</p>
        </div>
        <div className="threeContainers" style={{width: '360px', height: '375px', backgroundColor: '#96ca4a', color: 'white', padding:'5px'}}>
            <BsGlobeCentralSouthAsia size={50} style={{marginTop: '30px'}}/>
            <h2 style={{marginTop: '10px'}}>OUR MISSION</h2>
            <p style={{marginTop: '20px'}}>Our mission is to create a thriving entrepreneurial ecosystem in Uttarakhand by focusing on four key areas: Skill Development & Internships, Innovation & Incubation Support, Sustainable Practices & Economic Growth, and Community Building and Networking. By concentrating on these pillars, we contribute to the region's economic growth and prosperity.</p>
        </div>
        <div className="threeContainers"style={{width: '360px', height: '375px', backgroundColor: '#e91e63', color: 'white',  padding:'5px'}}>
            <BsFillTrophyFill size={50} style={{marginTop: '30px'}} />
            <h2 style={{marginTop: '10px'}}>HISTORY</h2>
            <p style={{marginTop: '20px'}}>TBI Geu history - Founded in 2010 as the Entrepreneurship Development Cell (EDC), TBI-GEU has undergone significant growth to become a cornerstone of entrepreneurial support in Uttarakhand. In 2015, we solidified our commitment by affiliating with Graphic Era Deemed to be University.</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default ThreeContainers;