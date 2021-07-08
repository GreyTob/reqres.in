import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Profile = ({ match }) => {
  const ID = match.params.id

  //нужно бы сюда useContext
  const [users, setUsers] = useState([])
  const [paginationNumber, setPaginationNumber] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)

  let url = `https://reqres.in/api/users?page=${paginationNumber}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data.data)
      // setTotalPages(response.data.total_pages)
    })
  }, [])

  return (
    <div className="card">
      {users.map((u) => {
        if (u.id == ID) {
          return (
            <>
              <img src={u.avatar} alt={u.first_name} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">
                  {u.first_name + ' ' + u.last_name}
                </h3>
                <p>
                  Email:&nbsp;<a href={`email:${u.email}`}>{u.email} </a>
                </p>

                <Link to="/" className="btn btn-primary">
                  Back
                </Link>
              </div>
            </>
          )
        }
      })}
    </div>
  )
}
