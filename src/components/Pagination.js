import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

export const Pagination = () => {
  const { users, pageHandler, page } = useContext(Context)
  const pages = new Array(users['total_pages']).fill('')

  return (
    <nav aria-label="Page navigation example " className="center">
      <ul className="pagination">
        <li className="page-item " onClick={pageHandler.bind(this, page - 1)}>
          <Link className="page-link" to="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        {pages.map((_, ind) => {
          return (
            <li
              key={ind + Math.random()}
              className="page-item"
              onClick={pageHandler.bind(this, ind + 1)}
            >
              <Link className="page-link" to="/">
                {ind + 1}
              </Link>
            </li>
          )
        })}

        <li className="page-item" onClick={pageHandler.bind(this, page + 1)}>
          <Link className="page-link" to="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
