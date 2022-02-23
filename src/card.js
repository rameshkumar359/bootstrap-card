import React from 'react';
export default function Card({name,price,features,key}){
    return(
        <div key={key} className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {name}
            </h5>
            <h6 className="card-price text-center">
              ${price}<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {
                features.map((data,i)=>{
                  return(
                    <li key={i} className={data.done?"":"text-muted"}>
                <span className="fa-li">
                  <i className={data.done? "fas fa-check" : "fas fa-times"}></i>
                </span>
                {data.name}
              </li>
                  )
                })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
        </div>
    )
}