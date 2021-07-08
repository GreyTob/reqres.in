import React from 'react'
import { Link } from 'react-router-dom'

export const UserCard = (props) => (
  <div className="card">
    <img src={props.avatar} alt={props} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title">{props.firstName + ' ' + props.lastName}</h3>
      <p>
        Email:&nbsp;<a href={`email:${props.email}`}>{props.email} </a>
      </p>

      <Link to={`/profile/${props.id}`} className="btn btn-primary">
        Открыть
      </Link>
    </div>
  </div>
)
