import React from 'react'

function Pagination(props) {
    const {currentPage, pageNumber, setPagination} = props
  return (
    <>
        <li onClick={() => setPagination(pageNumber)} className={`p-2 flex items-center justify-center font-1 rounded-full cursor-pointer ${currentPage == pageNumber ? 'bg-[#0D2f69]' : 'hover:bg-slate-300'} w-[50px] h-[50px]`}>
            <span className={`text-2xl font-semibold ${currentPage == pageNumber && 'text-white'}`}>{pageNumber + 1}</span>
        </li>
    </>
  )
}

export default Pagination