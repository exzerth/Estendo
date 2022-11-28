import React from 'react'
import HeroHomeContent from './HeroHomeContent'

const HeroContainer = ({title, subtitle, selectGen, advGen}) => {
  return (
    <div className="container">
        <div className="hero-content">
            <HeroHomeContent title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen}/>
        </div>
    </div>
  )
}

export default HeroContainer