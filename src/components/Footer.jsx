import React from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"
import footerLogo from "../images/footer-logo.png"
import fbIcon from "../images/fb.png"
import twIcon from "../images/tw.png"
import igIcon from "../images/ig.png"

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-box1">
          <img src={footerLogo} alt="footer-logo"/>
          <p>We are known for our quality and <br/> authentic products that have been <br/> enjoyed by customers for over a <br/> decade. Estendo Power Products <br/> is managed by a team of <br/> professionals with several years of <br/> experience in retail and wholesale <br/> distribution of power equipment <br/> and other electrical and electronic <br/> items.</p>
          <div className="social-logos">
            <img src={fbIcon} alt="facebook-icon"/>
            <img src={twIcon} alt="twitter-icon"/>
            <img src={igIcon} alt="instagram-icon"/>
          </div>
        </div>
        <div className="footer-box2">
          <h2>Get in touch</h2>
          <p>292 Wharf Road, Apapa, Lagos, Nigeria.</p>
          <p>+234 809 700 2009 | +234 906 000 6940</p>
          <a href="#help">help@estendo.net</a>
        </div>
        <div className="footer-box3">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link htoref="/blog">Blog</Link>
        </div>
        <div className="footer-box4">
          <h2>Legal</h2>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <hr className="container" style={{borderColor: "rgba(255, 255, 255, 0.5)"}}/>

      <p className="copyright">2020 Estendo Power Company Ltd © Copyright All rights reserved</p>
    </footer>
  )
}

export default Footer