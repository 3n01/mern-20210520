import React from 'react';
import '../public/css/style.css';

const Footer = () => {
    return(
        <footer class="site-footer">
        <div class="footer-box">
          <div class="footer-container">
            <div class="footer-row">
              <div class="footer-column">
                <div class="footer-heading"><a href="/contacto">Contact</a>&nbsp;|&nbsp;<a href="/legales">Legals</a></div>
              </div>
    
              <div class="footer-column">
                <div class="footer-heading" data-toggle="tooltip" data-placement="top" title="Instagram"><a href="https://www.instagram.com/pintor_efren/"><i class="fab fa-instagram"></i></a></div>
              </div>
              <div class="footer-column">
                <div class="footer-heading"><a href="/legales">@ Efrén García Iglesias 2021</a></div>
              </div>
    
    
            </div>
          </div>
    
        </div>
      </footer>
    )
}

export default Footer;