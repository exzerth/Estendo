import React from 'react'
import HeroHomeContent from './HeroHomeContent'

const HeroContainer = ({title, subtitle, selectGen, advGen}) => {
  const pathname = window.location.pathname
  return (
    <div className="container">
        <div className={(pathname === "/about" || pathname === "/contact") ? "about-hero-content" : (pathname === "/blog") ? "blog-hero-content" : "hero-content"}>
            <HeroHomeContent title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen}/>
        </div>
    </div>
  )
}

export default HeroContainer