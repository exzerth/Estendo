import React from 'react'
import "../css/genBrand.css"
import sumecImg from "../images/sumec.png"
import tigerImg from "../images/tiger.png"
import hondaImg from "../images/honda.png"

const GenBrand = () => {
  return (
    <section className="gen-brand">
      <div className="container gen-brand_wrapper">
        <div className="gen-box">
          <img style={{width: 100 + "%"}} src={sumecImg} alt=""/>
        </div>
        <div className="gen-box">
          <img style={{width: 100 + "%"}} src={tigerImg} alt=""/>
        </div>
        <div className="gen-box">
          <img style={{width: 100 + "%"}} src={hondaImg} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default GenBrand