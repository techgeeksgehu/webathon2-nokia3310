import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <>
         <footer style={{width: '100vw'}}>
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img style={{marginLeft: '20px'}} src="/tbi_logo.png" alt="Funel logo" />
            </a>
          </div>

          <div class="footer-link-box">
          
            <ul class="footer-link-list">
             
                <h3 class="h4 link-title">Info</h3>
              

              <li>
                <a href="#" class="footer-link">About Us</a>
              </li>

              <li>
                <a href="#" class="footer-link">Features</a>
              </li>

              <li>
                <a href="#" class="footer-link">All Services</a>
              </li>
            </ul>

            <ul class="footer-link-list">
             
                <h3 class="h4 link-title">Security</h3>
              

              <li>
                <a href="#" class="footer-link">Blog</a>
              </li>

              <li>
                <a href="#" class="footer-link">Help Center</a>
              </li>

              <li>
                <a href="#" class="footer-link">Contact</a>
              </li>
            </ul>

            <ul class="footer-link-list">
              
                <h3 class="h4 link-title">Relevent</h3>
              

              <li>
                <a href="#" class="footer-link">Why</a>
              </li>

              <li>
                <a href="#" class="footer-link">Enquiry</a>
              </li>

              <li>
                <a href="#" class="footer-link">Education Methodology</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          All right reserved
        </p>
      </div>
    </footer>
    </>
    )
}

export default Footer;