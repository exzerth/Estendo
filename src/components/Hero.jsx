import React from 'react';
import "../css/hero.css";
import HeroContent from "./HeroContent";

const Hero = ({title, subtitle, selectGen, advGen}) => {

  return (
    <section className="hero-background">
        <div className="overlay">
            <div className="container">
                <div className="hero-content">
                  <HeroContent title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;