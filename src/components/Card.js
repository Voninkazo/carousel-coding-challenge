import React from 'react'

export function Card({ card }) {
  return (
    <div className='shadow-contentCardShadow px-4 py-6 whitespace-nowrap'>
      <h2 className='font-bold text-center text-gray-900 text-lg leading-8 pb-4'>
        {card.title}
      </h2>
      <div className='w-full'>
        <img
          src={card.images[Math.floor(Math.random() * card.images.length)]} // display an image at a time
          alt={card.title}
          className='w-full'
        />
      </div>
    </div>
  )
}
