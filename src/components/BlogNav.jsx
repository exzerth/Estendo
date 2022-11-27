import React from 'react'

const BlogNav = () => {
  return (
    <nav class="nav">
        <div class="container mini-nav">
            <a class="nav-link blog-link" href="blog-post.html">Latest article</a>
            <a class="nav-link blog-link" href="#popular">Popular</a>
            <a class="nav-link blog-link blog-link_active" href="blog.html">Customer Service</a>
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