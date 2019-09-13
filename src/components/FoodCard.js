import React from 'react'


const FoodCard = ({title,image_url}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 my-3 col-xs-12">
        <div className="card">
          <img src={image_url} alt="recipe" className="img-card-top" style={{ height: "14rem" }} />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            </div>
        </div>
      </div>
    </>
  )
  }

export default FoodCard;