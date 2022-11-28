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
  
     {/*  <div class="hero-content_text">
                    <h1>Guide to Customer Relations: Definitions, Benefits and Tips.</h1>
                    <div class="author">
                        <div class="author-img">
                            <img src="/img/author.png" alt=""/>
                        </div>
                        <div class="author-about">
                            <p>Gregory Ciotti</p>
                            <p>August 8, 2020</p>
                        </div>
                    </div>
                  </div>
                  <div class="hero-content_img d-none d-md-block">
                    <img src="/img/blog-hero.png" alt=""/>
                  </div> */}
      </>
    )
}

export default HeroHomeContent