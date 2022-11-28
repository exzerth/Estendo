import React from 'react'
import HeroContainer from './HeroContainer'


const HeroContent = ({title, subtitle, selectGen, advGen}) => {
  const pathname = window.location.pathname
  return (
    <div className={(pathname !== "/blog") && (pathname !== "/blog/service") ? "overlay" : ""}>
      <HeroContainer title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen} />
    </div>
  )
}

export default HeroContent