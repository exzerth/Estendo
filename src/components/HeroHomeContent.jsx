import React from 'react'

const HeroHomeContent = (props) => {
    const title = props.title
    const subtitle = props.subtitle
    const selectGen = props.selectGen
    const advGen = props.advGen
  
    return (
      <>
      {title}
      {subtitle}
      {selectGen}
      {advGen}
      </>
    )
}

export default HeroHomeContent