import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserCard } from '../components/UserCard'
import { Pagination } from '../components/Pagination'
import { Loader } from '../components/Loader/Loader'

export const Users = () => {
  const { users } = useContext(Context)

  console.log('Users', users)

  return (
    <>
      <h2>Users</h2>

      {users.data ? (
        <div>
          <div className="row">
            {users.data.map((user) => (
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

          <Pagination />
        </div>
      ) : (
        <Loader />
      )}
    </>

    //////////////////
    // <>
    //   <h2>Users</h2>

    //   <div>
    //     <div className="row">
    //       {/* {users.map((user) => (
    //         <div className="col-sm-4 mb-4" key={user.id}>
    //           <UserCard
    //             firstName={user.first_name}
    //             lastName={user.last_name}
    //             email={user.email}
    //             id={user.id}
    //             avatar={user.avatar}
    //           />
    //         </div>
    //       ))} */}
    //       Users
    //     </div>

    //     <Pagination
    //     // totalPages={totalPages}
    //     // setPaginationNumber={(number) => setPaginationNumber(number)}
    //     // setPaginationNumberArrow={(number) =>
    //     // setPaginationNumber(paginationNumber + number)
    //     // }
    //     />
    //   </div>
    // </>
  )
}
