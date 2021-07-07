import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className="card">
      <img src={''} alt={''} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{''}</h3>
        <p>
          Email:&nbsp;<a href={''}>{''} </a>
        </p>

        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
      one profile
    </div>
  )
}
