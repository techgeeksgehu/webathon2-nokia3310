import { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navigation" style={{backgroundColor: 'white'}}>
        <a href="/" className="brand-name" >
          <img src="/tbi_logo.png" style={{marginRight: '10px', width: '60px', height: '60px'}}></img>
          
        </a>
        <p className="college_name" style={{fontWeight: 'bold', fontSize: '20px'}}> StartUp Incubation Center</p>
        <button
          className="toggleButton"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <ion-icon name="menu-outline" className="menu-outline"></ion-icon>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul id="#top" style={{marginTop: '20px'}}>
            <li>
              <a href="/" className="button">Home</a>
            </li>
            

            <li style={{marginBottom: '15px'}}>
              <a href="#about-us">
              <a style={{marginBottom: '0px'}}  className="button about-us-button" >
                About Us
              </a>
              </a>
            </li>

            <li>
              <a className="button" onClick={() => navigate("/event")}>
                Events
              </a>
            </li>
            <li>
              <a className="button" onClick={() => navigate("/")}>
                Skill Development
              </a>
            </li>
            <li>
              <a  className="button" onClick={() => navigate("/")}>
                Incubation
              </a>
            </li>
            <li>
              <a  className="button" onClick={() => navigate("/")}>
                Resources
              </a>
            </li>

            <li>
              <a  className="button" href="#team" onClick={()=> navigate("/team")}>
                Meet My Team
              </a>
            </li>

  
           
            <li>
            </li>
           
          </ul>
        </div>
        <img 
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
        src="/gehu_logo.png" style={{marginRight: '30px', width: '60px', height: '60px'}}></img>
      </nav>
    </>
  );
}
