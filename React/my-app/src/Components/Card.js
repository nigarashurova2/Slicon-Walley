import React from 'react'
import Img1 from "../assets/image/img1.jpg";

const Card = (props) => {
  return (
  
      <div className="card" style={{width: '18rem'}}>
        <img src={Img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#/" className="btn btn-primary">{props.btn}</a>
        </div>
      </div>
 
  )
}

export default Card