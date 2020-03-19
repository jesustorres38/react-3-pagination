import React from 'react'

const Pagination = ({postPerPage, totalPosts, paginate}) => {
  const pageNumbers = []

  for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i)
  }


  return (
    <ul className='pagination'>
      {pageNumbers.map(el => {
          return <li key={el} ><a onClick={() => paginate(el)} href='!#'>{el}</a></li>
        } 
      )}
    </ul>
  )
}

export default Pagination