import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { UserCard } from '../components/UserCard'
import { Pagination } from '../components/Pagination'
import { Loader } from '../components/Loader/Loader'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [paginationNumber, setPaginationNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    let url = `https://reqres.in/api/users?page=${paginationNumber}`
    axios.get(url).then((response) => {
      setUsers(response.data.data)
      setTotalPages(response.data.total_pages)
    })
  }, [paginationNumber])

  return (
    <>
      <h2>Users</h2>

      {totalPages ? (
        <div>
          <div className="row">
            {users.map((user) => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <UserCard
                  firstName={user.first_name}
                  lastName={user.last_name}
                  email={user.email}
                  id={user.id}
                  avatar={user.avatar}
                />
              </div>
            ))}
          </div>

          <Pagination
            totalPages={totalPages}
            setPaginationNumber={(number) => setPaginationNumber(number)}
            setPaginationNumberArrow={(number) =>
              setPaginationNumber(paginationNumber + number)
            }
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}
