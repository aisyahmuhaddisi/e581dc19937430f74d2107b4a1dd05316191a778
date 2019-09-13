import React from 'react'
import '../style/Tabs.css'


export default function Tabs() {
    return (
        <>
          <div className="container">
              <div className="row mx-auto">
                <div className="col-xs-12 w-100">
                  <nav>
                    <div className="nav nav-tabs nav-fill mx-auto" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Paket Lunch</a>
                      <a className="nav-item nav-link " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Paket Dinner</a>
                    </div>
                  </nav>
              </div>
        </div>
        </div>
        </>
      )
}