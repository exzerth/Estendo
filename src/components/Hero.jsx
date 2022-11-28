import React from 'react';
import "../css/hero.css";
import HeroContent from './HeroContent';

const Hero = ({title, subtitle, selectGen, advGen}) => {
  return (
    <section className="hero-background">
        <HeroContent title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen} />
    </section>
  )
}

export default Hero;