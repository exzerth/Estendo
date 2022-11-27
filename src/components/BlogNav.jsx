import React from 'react'
import { Link } from 'react-router-dom'

const BlogNav = () => {
  return (
    <nav class="nav">
        <div class="container mini-nav">
            <Link class="nav-link blog-link blog-link_active" to="blog">Latest article</Link>
            <a class="nav-link blog-link" href="#popular">Popular</a>
            <Link class="nav-link blog-link" href="service">Customer Service</Link>
            <a class="nav-link blog-link" href="#product">Product</a>

            <div class="search">
              <img src="/img/search-icon.png" alt=""/>
              {/* <div class="dropdown">
                <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="/img/search-icon.png" alt=""/>
                </a>
              
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                  </a>
                </div>
              </div> */}
            </div>
        </div>
    </nav>
  )
}

export default BlogNav