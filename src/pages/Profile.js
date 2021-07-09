import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../components/Loader/Loader'
import { Context } from '../Context'

export const Profile = ({ match }) => {
  const ID = +match.params.id
  const { users } = useContext(Context)

  return (
    <div className="card">
      {!users.data ? (
        <Loader />
      ) : (
        users.data.map((user) => {
          if (user.id === ID) {
            return (
              <div key={user.first_name}>
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  className="card-img-top"
                />

                <div className="card-body">
                  <h3 className="card-title">
                    {user.first_name + ' ' + user.last_name}
                  </h3>

                  <p>
                    Email:&nbsp;
                    <a href={`email:${user.email}`}>{user.email} </a>
                  </p>

                  <Link to="/" className="btn btn-primary">
                    Back
                  </Link>
                </div>
              </div>
            )
          }
        })
      )}
    </div>
  )
}
