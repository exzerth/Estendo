import React from 'react'
import "../css/blog-post.css"
import BlogNav from '../components/BlogNav'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import BlogPost from '../components/BlogPost'

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <BlogNav/>
    <Hero />
    <BlogPost/>
    <Footer/>
    </>
  )
}

export default Blogs