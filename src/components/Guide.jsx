import React from 'react';
import "../css/guide.css";
import guideOne from "../images/guide1.png";
import guideTwo from "../images/guide2.png";
import guideThree from "../images/guide3.png";

const Guide = () => {
  return (
    <section className="container mini-guide">
        <div className="guide-box">
          <img src={guideOne} alt="" className="guide-img"/>
          <h4 className="guide-box_topic1">Choose Your Perfect Generator</h4>
          <p>You haven't made you choice yet? Click on the generator advisor above and you will get a free report from us in a few minutes.</p>
        </div>
        <div className="guide-box">
          <img src={guideTwo} alt="" className="guide-img"/>
          <h4 className="guide-box_topic2">Know More About Your Perfect Generator</h4>
          <p>Get free maintenance advice from our top consultant. Click on the generator advisor to initiate that.</p>
        </div>
        <div className="guide-box">
          <img src={guideThree} alt="" className="guide-img"/>
          <h4 className="guide-box_topic3">Buy With Confidence</h4>
          <p>Buy your generator directly from the manufacturer and be rest assured that your gadgets are safe.</p>
        </div>
    </section>
  )
}

export default Guide;