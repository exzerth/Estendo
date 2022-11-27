import React from 'react'
import timeImg from "../images/time.png"

const ContactContent = () => {
  return (
    <section className="container contact">
        <div className="contact-form">
            <h2>We'd love to hear from you</h2>
            <p>Feel free to Contact Us!</p>
            <form>
                <div className="form-group">
                  <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Your Name*"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email*"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-danger mr-2">Send Message</button>
            </form>
        </div>
        <div className="contact-text">
            <h2>Contact Details</h2>
            <a href="#help">help@estendo.net</a>
            <p>+234 809 700 2009 | +234 906 000 6940</p>
            <p>292 Wharf Road, Apapa, Lagos, Nigeria.</p>
            <h3>Business Hours</h3>
            <ul>
                <li><img src={timeImg} alt="timer-img"/>Monday - Friday 8am to 6pm</li>
                <li><img src={timeImg} alt="timer-img"/>Sunday - Closed</li>
                <li><img src={timeImg} alt="timer-img"/>Saturday - 8am to 3pm</li>
            </ul>
        </div>
    </section>
  )
}

export default ContactContent