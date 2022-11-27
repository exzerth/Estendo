import React from 'react'

const ArticlesContent = (props) => {
    const image = props.image
  return (
    <div className="col-md-6 col-lg-4">
        <div className="card article-card">
            {image}
            <div className="card-body">
            <h5 id='article-card-title' className="card-title">CUSTOMER SERVICE</h5>
            <p id='article-card-text' className="card-text">Guide to Customer Relations: Definitions, Benefits and Tips.</p>
            </div>
        </div>
    </div>
  )
}

export default ArticlesContent