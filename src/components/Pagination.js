import { Link } from 'react-router-dom'

export const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item" onClick={props.setPaginationNumber}>
          <Link className="page-link" href="/">
            1
          </Link>
        </li>
        <li className="page-item" onClick={props.setPaginationNumber}>
          <Link className="page-link" href="/">
            2
          </Link>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
