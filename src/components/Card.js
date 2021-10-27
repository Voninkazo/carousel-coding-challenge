import React from 'react'

export function Card({ card }) {
  return (
    <div className='shadow-contentCardShadow px-4 py-6'>
      <h2 className='font-bold text-gray-900 text-lg leading-8 pb-4'>
        {card.title}
      </h2>
      <div>
        <img
          src={card.image[Math.floor(Math.random() * card.image.length)]}
          alt={card.title}
          className='w-80 h-80'
        />
      </div>
    </div>
  )
}
