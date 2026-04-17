import React from 'react'
import { useLocation } from 'react-router-dom';

function BlogDetail() {
    let { state } = useLocation()
  return (
    <div className='p-5 md:p-10 px-5 md:px-24'>
        <h1 className='f-1 text-[30px] md:text-[45px] font-extrabold mb-3'>{state.news_data.title}</h1>
        <p className="font-1 text-lg font-semibold mb-5">{state.news_data.date}</p>
        <div className="rounded-2xl overflow-hidden mb-5">
            <img src={state.news_data.image} alt={state.news_data.title} />
        </div>
        <p className="font-1 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere itaque veritatis laboriosam, molestias enim consequuntur nemo inventore cumque recusandae reiciendis animi blanditiis quae ab eligendi temporibus in sit odit eum.</p>
    </div>
  )
}

export default BlogDetail