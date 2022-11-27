import React from 'react'
import "../css/offer.css"
import offerImgOne from "../images/offer-img1.png"
import offerImgTwo from "../images/offer-img2.png"
import offerImgThree from "../images/offer-img3.png"
import arrowRight from "../images/arrow-right.png"

const Offers = () => {
  return (
    <section className="container offers">
      <h3>Special Offers</h3>
      <p>Discover a selection of generators with even bigger savings - for a limited time only!</p>
      <div className="offers-grid">
        <div className="offer-box1">
          <img className="offer-img" src={offerImgOne} alt=""/>
          <div className="offer-box_more">
            <h4 className="gen-name">ELEPAQ</h4>
            <a href="#buy">
              Buy Product
              <img src={arrowRight} alt="arrow-right"/>
            </a>
          </div>
        </div>
        <div className="offer-box2">
          <img className="offer-img" src={offerImgTwo} alt=""/>
          <div className="offer-box_more">
            <h4 className="gen-name">ELEPAQ</h4>
            <a href="#buy">
              Buy Product
              <img src={arrowRight} alt="arrow-right"/>
            </a>
          </div>
        </div>
        <div className="offer-box3">
          <img className="offer-img" src={offerImgThree} alt=""/>
          <div className="offer-box_more">
            <h4 className="gen-name">ELEPAQ</h4>
            <a href="#buy">
              Buy Product
              <img src={arrowRight} alt="arrow-right"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers