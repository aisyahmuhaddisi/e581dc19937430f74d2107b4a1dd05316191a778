import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="card col-md-3 col-xs-12 m-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
           </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;