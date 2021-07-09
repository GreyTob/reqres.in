import { Link } from 'react-router-dom'

export const Pagination = ({
  totalPages,
  setPaginationNumber,
  setPaginationNumberArrow,
}) => {
  const pages = new Array(totalPages).fill('')

  return (
    <nav aria-label="Page navigation example " className="center">
      <ul className="pagination">
        <li
          className="page-item "
          onClick={setPaginationNumberArrow.bind(this, -1)}
        >
          <Link className="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        {pages.map((_, ind) => {
          return (
            <li
              key={ind + Math.random()}
              className="page-item"
              onClick={setPaginationNumber.bind(this, ind + 1)}
            >
              <Link className="page-link" href="/">
                {ind + 1}
              </Link>
            </li>
          )
        })}

        <li
          className="page-item"
          onClick={setPaginationNumberArrow.bind(this, +1)}
        >
          <Link className="page-link" href="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
