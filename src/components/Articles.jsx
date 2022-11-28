import React from 'react'
import ArticlesContent from './ArticlesContent'
import articleImgOne from '../images/article-img1.png'
import articleImgTwo from '../images/article-img2.png'
import articleImgThree from '../images/article-img3.png'

const Articles = () => {
  return (
    <section className="articles-grid">
      <div className="container">
        <div className="row">
          <ArticlesContent image={<img src={articleImgOne} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} className="card-img-top" alt="..." />}/>

          <ArticlesContent image={<img src={articleImgOne} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} className="card-img-top" alt="..." />}/>

          <ArticlesContent image={<img src={articleImgOne} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgTwo} className="card-img-top" alt="..." />}/>
          <ArticlesContent image={<img src={articleImgThree} className="card-img-top" alt="..." />}/>
        </div>
        <p className="view-all">View All Articles</p>
      </div>
    </section>
  )
}

export default Articles