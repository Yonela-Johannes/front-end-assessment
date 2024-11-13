import React from 'react'

type Props = {}

export default function Card ({ category }) {
  return (
    <div className='h-full'>
        <img className='w-[324px] h-[321px] object-contain' src={category.imgSrc} alt={category.title} />
    </div>
  )
}