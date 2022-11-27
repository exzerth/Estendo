import React from 'react'
import ArticlesContent from './ArticlesContent'
import articleImgOne from '../images/article-img1.png'
import articleImgTwo from '../images/article-img2.png'
import articleImgThree from '../images/article-img3.png'

const Articles = () => {
  return (
    <section class="articles-grid">
      <div class="container">
        <div class="row">
          <ArticlesContent image={<img src={articleImgOne} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} class="card-img-top" alt="..." />}/>

          <ArticlesContent image={<img src={articleImgOne} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} class="card-img-top" alt="..." />}/>

          <ArticlesContent image={<img src={articleImgOne} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} class="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} class="card-img-top" alt="..." />}/>
        </div>
        <p class="view-all">View All Articles</p>
      </div>
    </section>
  )
}

export default Articles