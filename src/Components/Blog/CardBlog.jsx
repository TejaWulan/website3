import React from 'react'
import { Link } from 'react-router-dom'

const CardBlog = ({index, data}) => {
    const {id, image, date, title, category} = data
  return (
    <>
        <Link to={`/blog/detail/${id}`} state={{news_data: data}} key={index} className="rounded-3xl p-6 hover:shadow-2xl cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-5">
                <img src={image} alt={title} />
            </div>
            <div className="news-info">
                <p className="font-1 mb-2 font-semibold">{date}</p>
                <h1 className="text-xl md:text-2xl font-bold line-clamp-2 mb-5">{title}</h1>
                <span className="rounded-3xl px-4 py-1 border border-indigo-950 text-indigo-950">{category}</span>
            </div>
        </Link>
    </>
  )
}

export default CardBlog