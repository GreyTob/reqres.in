import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../components/Loader/Loader'
import axios from 'axios'

export const Profile = ({ match }) => {
  const ID = +match.params.id

  //нужно бы useContext
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    let url = `https://reqres.in/api/users?page=1`
    axios.get(url).then((response) => {
      setUsers(response.data.data)
      setLoader(true)
    })
  }, [])

  return (
    <div className="card">
      {!loader ? (
        <Loader />
      ) : (
        users.map((user) => {
          if (user.id === ID) {
            return (
              <>
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
              </>
            )
          }
        })
      )}
    </div>
  )
}
