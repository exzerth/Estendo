import React from 'react'
import "../css/blognav.css"
import { Link } from 'react-router-dom'
import searchIcon from "../images/search-icon.png"

const BlogNav = () => {
  return (
    <nav className="nav">
        <div className="container mini-nav">
            <Link className="nav-link blog-link blog-link_active" to="/blog">Latest article</Link>
            <Link className="nav-link blog-link" href="#popular">Popular</Link>
            <Link className="nav-link blog-link" to="/service">Customer Service</Link>
            <Link className="nav-link blog-link" href="#product">Product</Link>

            <div className="search">
              <img src={searchIcon} alt=""/>
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