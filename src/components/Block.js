import React from 'react'

export function Block({ block }) {
  return (
    <div className='shadow-contentCardShadow px-4 py-6 whitespace-nowrap rounded'>
      <h2 className='font-bold text-center text-gray-700 text-lg leading-8 pb-4'>
        {block.title}
      </h2>
      <div id='card' className='w-full'>
        <img
          src={block.images[Math.floor(Math.random() * block.images.length)]} // display an image at a time
          alt={block.title}
          className='w-full rounded'
        />
      </div>
    </div>
  )
}
