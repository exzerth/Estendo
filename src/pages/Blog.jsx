import React from 'react'
import "../css/blog.css"
import Navbar from '../components/Navbar'
import BlogNav from '../components/BlogNav'
import Hero from '../components/Hero'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

const Blog = ({subtitle, title}) => {
    title = <h1>Featured Article</h1>
    subtitle = <p>How to maintain your laptop for a Long-last Effect</p>
  return (
    <>
    <Navbar/>
    <BlogNav/>
    <Hero subtitle={subtitle} title={title}/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default Blog