import React from 'react'

export function Card({ card }) {
  return (
    <div className='shadow-contentCardShadow px-4 py-6'>
      <h2 className='font-bold text-gray-900 text-lg leading-8 pb-4'>
        {card.title}
      </h2>
      <div>
        <img
          src={card.images[Math.floor(Math.random() * card.images.length)]}
          alt={card.title}
          className='sm:w-40 sm:h-40 md:w-80 lg:h-80'
        />
      </div>
    </div>
  )
}
