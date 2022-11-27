import React from 'react'
import "../css/catalogue.css"
import CatalogueGridContent from './CatalogueGridContent'

const CatalogueGrid = () => {
  return (
    <>
    <div className="container catalogue">
        <div className="filter search">
            <label htmlFor="">Filters:</label>
            <i className="fa fa-search"></i> 
            <input type="text" placeholder="Search for appliances"/>
            <i className="fa fa-filter"></i> 
        </div>
    </div>
    <section className="container catalogue-grid">
      <div className="">
        <div className="row">
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
          <CatalogueGridContent />
        </div>
      </div>
    </section>
    </>
  )
}

export default CatalogueGrid