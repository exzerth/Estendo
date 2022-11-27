import React from 'react'
import "../css/testimony.css"
import testimonyImg from "../images/testimony-img.png"

const Testimony = () => {
  return (
    <section className="testimony">
      <div className="container testimony-card">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card text-center">
                <img src={testimonyImg} className="img-fluid card-img-top" style={{width: 100 + "px"}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Eleanor Pena</h5>
                  <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
                <img src={testimonyImg} className="img-fluid card-img-top" style={{width: 100 + "px"}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Eleanor Pena</h5>
                  <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
                <img src={testimonyImg} className="img-fluid card-img-top" style={{width: 100 + "px"}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Eleanor Pena</h5>
                  <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="text-center testimony-content">
        <h3>Ready to get started?</h3>
        <button className="btn btn-danger">Generator Advice</button>
        <p>Catalogue of generator and other appliances</p>
      </div>
    </section>
  )
}

export default Testimony