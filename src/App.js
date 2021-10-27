import React, { useEffect, useState } from 'react'

import data from './data.json'

function App() {
  const [sliceStartIndex, setSliceStartIndex] = useState(0)
  const [sliceEndIndex, setSliceEndIndex] = useState(4)
  const [carouselData, setCarouselData] = useState(
    data.slice(sliceStartIndex, sliceEndIndex)
  )
  const [previousData, setPreviousData] = useState()

  function slideToLeft() {}

  function slideToRight() {
    setSliceStartIndex(sliceStartIndex + 4)
    setSliceEndIndex(sliceEndIndex + 4)
  }

  useEffect(() => {
    setCarouselData([...data].slice(sliceStartIndex, sliceEndIndex))
  }, [sliceEndIndex])

  return (
    <>
      <div className='p-8 flex gap-4'>
        {carouselData.map((card, index) => {
          return (
            <div key={index}>
              <h2 className='font-bold text-gray-900 text-lg leading-8'>
                {card.title}
              </h2>
              <div>
                <img src={card.image} alt={card.title} className='w-80 h-80' />
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex justify-center gap-6 '>
        <button onClick={slideToLeft} className='px-8 py-4 bg-black text-white'>
          Previous
        </button>
        <button
          onClick={slideToRight}
          className='px-8 py-4 bg-black text-white'>
          Next
        </button>
      </div>
    </>
  )
}

export default App
