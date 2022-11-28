import React from 'react'
import "../css/blog-post.css"
import BlogNav from '../components/BlogNav'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogPost from '../components/BlogPost'
import BlogHeroContent from '../components/BlogHeroContent'
import authorImage from "../images/author.png"

const blogStyles = {
  width: 100 + "%",
  height: 545,
  background: "#D63535",
  overflow: "hidden",
}

const Blogs = ({blogTitle, blogSubtitle}) => {
  
  blogTitle = <h1>Guide to Customer Relations: Definitions, Benefits and Tips.</h1>
  blogSubtitle = <div className="author">
  <div className="author-img">
      <img src={authorImage} alt=""/>
  </div>
  <div className="author-about">
      <p>Gregory Ciotti</p>
      <p>August 8, 2020</p>
  </div>
</div>

  return (
    <>
    <Navbar/>
    <BlogNav/>
    <div style={blogStyles}>
      <BlogHeroContent blogTitle={blogTitle} blogSubtitle={blogSubtitle}/>
    </div>
    <BlogPost/>
    <Footer/>
    </>
  )
}

export default Blogs