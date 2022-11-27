import React from 'react'

const ArticlesContent = (props) => {
    const image = props.image
  return (
    <div class="col-md-6 col-lg-4">
        <div class="card">
            {image}
            <div class="card-body">
            <h5 class="card-title">CUSTOMER SERVICE</h5>
            <p class="card-text">Guide to Customer Relations: Definitions, Benefits and Tips.</p>
            </div>
        </div>
    </div>
  )
}

export default ArticlesContent