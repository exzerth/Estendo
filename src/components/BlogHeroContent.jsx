import React from 'react'
import blogHero from "../images/blog-hero.png"

const BlogHeroContent = (props) => {

    const blogTitle = props.blogTitle
    const blogSubtitle = props.blogSubtitle
  return (
    <>
        <section className="hero-background">
            <div className="container">
                <div className="blog-hero-content">
                    <div className="blog-hero-content_text">
                        {blogTitle}
                        {blogSubtitle}
                    </div>
                    <div className="hero-content_img">
                        <img src={blogHero} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BlogHeroContent