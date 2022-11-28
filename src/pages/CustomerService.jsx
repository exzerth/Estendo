import React from 'react'
import "../css/service.css"
import Navbar from '../components/Navbar'
import BlogNav from '../components/BlogNav'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import BlogHeroContent from '../components/BlogHeroContent'

const blogStyles = {
  width: 100 + "%",
  height: 545,
  background: "#D63535",
  overflow: "hidden",
}

const CustomerService = ({blogTitle, blogSubtitle}) => {
    blogTitle = <h1>Featured Article</h1>
    blogSubtitle = <p>How to maintain your laptop for a Long-last Effect</p>
  return (
    <>
    <Navbar/>
    <BlogNav/>
    <div style={blogStyles}>
      <BlogHeroContent blogTitle={blogTitle} blogSubtitle={blogSubtitle}/>
    </div>
    <Articles/>
    <Footer/>
    </>
  )
}

export default CustomerService