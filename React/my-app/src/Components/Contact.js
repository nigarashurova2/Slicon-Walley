import React from 'react'

const Contact = ({contact}) => {
  return (
        <div className="card-content">
        <div className="card " style={{width: '18rem', margin: "20px 0"}}>
        <img src={contact.picture.large}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${contact.name.first + " " +  contact.name.last}  `}</h5>
          <p className="card-text">Username: {contact.login.username}</p>
          <p className="card-text">Age: {contact.dob.age}</p>
          <p className="card-text">Phone: {contact.phone}</p>
          <p className="card-text">City: {contact.location.city}</p>
          <p className="card-text">Street: {contact.location.state}</p>
          <p>Date: {contact.dob.date}</p>
          <a href={`mailto: ${contact.email}`} className="btn btn-danger">Contact</a>
        </div>   
    </div>
    </div>
  )
}

export default Contact