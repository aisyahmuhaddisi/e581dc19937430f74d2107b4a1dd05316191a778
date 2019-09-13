import React from 'react'


const FoodCard = ({title,image_url}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 my-3 col-xs-12">
        <div className="card" style={{height: '220px', border: 'none'}}>
          <div className="card img-fluid" style={{height: '220px', border: 'none'}}>
          <img className="card-img-top" src={image_url} alt="recipe" className="img-card-top" style={{ height: "60%", borderRadius:'5px'}} />
          <div className="card-img-overlay">
            <h4 className="card-title text-center" style={{color: 'white', fontSize: '40px', fontFamily:'Monaco', alignContent:'center'}}> Tokyo Lunch </h4>
          </div>
          <div className="card-body text-capitalize p-0">
            <h6 className="font-weight-bold mt-1">{title}</h6>
            <small className="font-weight-bold" style={{color: 'lightgrey'}}>Lunch | Budget | Kitchen</small> <br/>
            <small className="font-weight-bold" style={{color: 'lightblue'}}>Free Delivery</small>
          </div>
          </div>
        </div>
      </div>
    </>
  )
  }

export default FoodCard;