import React, { useEffect, useState } from 'react'
import CardBlog from './Hero'
import dataBlog from './Data'
import Pagination from './Pagination'

const BlogList = () => {
    const [listData, setListData] = useState([])
    const [pagination, setPagination] = useState(0)

    const handlePagination = (val) => {
        console.log('val', val)
    }

    const handleDataList = (data, size) => {
        const clonedData = data.slice(0)
        const tempListData = []
        while (clonedData.length > 0) {
            tempListData.push(clonedData.splice(0, size))
            setListData(...listData, tempListData)
        }
    }

    useEffect(() => {
        handleDataList(dataBlog.data, 6)
    }, [])

  return (
    <>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {listData[pagination]?.length > 0 ? listData[pagination].map((item, index) => (
                <CardBlog key={index} data={item}/>
            )) : null}
        </div>
        <div className="flex justify-center p-2 mt-16">
            <ul className="page-numbers gap-x-4 list-none flex items-center">
                {listData?.map((_, index) => (
                    <Pagination key={index} currentPage={pagination} pageNumber={index} setPagination={setPagination}/>
                ))}
            </ul>
        </div>
    </>
  )
}

export default BlogList