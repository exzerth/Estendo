import React from 'react'
import catalogueImg from "../images/hiclip.png"
import arrowRight from "../images/arrow-right.png"

const CatalogueGridContent = () => {
  return (
    <div className="col-md-6 col-lg-4">
        <div className="catalogue-box">
            <img className="catalogue-img" src={catalogueImg} alt=""/>
            <div className="catalogue-box_more">
            <h4 className="product-name">ELEPAQ-X24FG <br/> 2.5KVA </h4>
            <button className="btn btn-danger" href="#">
                Buy Products
                <img src={arrowRight} alt="arrow-right"/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default CatalogueGridContent