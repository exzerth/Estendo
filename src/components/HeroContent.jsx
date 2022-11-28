import React from 'react'
import HeroContainer from './HeroContainer'


const HeroContent = ({title, subtitle, selectGen, advGen}) => {
  return (
    <div className="overlay">
      <HeroContainer title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen}/>
    </div>
  )
}

export default HeroContent