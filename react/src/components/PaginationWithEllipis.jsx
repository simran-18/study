import { useState } from 'react'
import Pagination from './Pagination';

function PaginationWithEllipis() {
  const [currentPage,setCurrentPage]=useState(1);
  
  const onPageChange=(page)=>{
    setCurrentPage(page)
  }

  return (
    <div>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={10}
        />
    </div>
  )
}

export default PaginationWithEllipis