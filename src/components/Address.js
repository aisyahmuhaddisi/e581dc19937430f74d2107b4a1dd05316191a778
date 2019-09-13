import React from 'react'
import '../style/Address.css'


export default function Address() {
    return (
        <>
          <div className="nav-float">
            <div className="container w-100 m-2 p-2">
              <div className="alamat-header font-weight-bold" style={{fontSize: '14px', color:'gray'}}>
                  Alamat Pengiriman
              </div>
              <div className="font-weight-bold" style={{fontSize: '10px', color:'orange'}}>
              <span><i class="fas fa-map-marker-alt"></i></span>
                  Jalan Tulodong Atas no.28
              </div>
            </div>
          </div>
        </>
      )
}