import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { UserCard } from '../components/UserCard'
import { Pagination } from '../components/Pagination'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [paginationNumber, setPaginationNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  let url = `https://reqres.in/api/users?page=${paginationNumber}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data.data)
      // setTotalPages(response.data.total_pages)
    })
  }, [])

  // const context = createContext(users)

  // const setPaginationNumber = (number) => {
  //   return (paginationNumber = number)
  // }

  return (
    <div>
      <h2>Users</h2>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-sm-4 mb-4">
              <UserCard
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
                id={user.id}
                avatar={user.avatar}
              />
            </div>
          )
        })}
      </div>
      <Pagination
      // setPaginationNumber={(number) =>
      //   setPaginationNumber((paginationNumber = number))
      // }
      />
    </div>
  )
}
