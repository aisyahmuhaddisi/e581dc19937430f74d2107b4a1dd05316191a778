import React, { Component } from "react";
import '../style/NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#"><img src="https://assetcdn.kulina.id/preliminary/kulina-logo.png" style={{width:'100px', height: '45px'}}></img></a>
            <button className="navbar-toggler" style={{border: 'none'}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
            </nav>
          </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;