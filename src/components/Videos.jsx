import React from 'react'
import "../css/videos.css"

const Videos = () => {
  return (
    <section className="video">
      <div className="container video-content">
        <div className="video-text">
          <h4>Watch videos from the UK's number one car review channel</h4>
          <ul>
            <li>Videos for real Generator buyers like you</li>
            <li>Expert reviews for every major generator</li>
          </ul>
        </div>
        <div className="video-play">
          <iframe width="420" height="345" src="https://www.youtube.com/embed/sGpkhzK2K7o" title="Youtube" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default Videos