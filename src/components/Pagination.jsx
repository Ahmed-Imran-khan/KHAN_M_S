import React from 'react'
import { Link } from "react-router-dom";


function Pagination() {
  return (
    <div>
         {/* pagination */}
      <nav aria-label="Page navigation example" className="my-5">
        <ul class="pagination justify-content-end mx-5">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li> 
          <li class="page-item">
            <Link class="page-link" to="/Medicine">
              1
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/Medicine2">
              2
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/Medicine3">
              3
            </Link>
          </li>
          <li class="page-item disabled">
            <Link class="page-link" to="/">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination