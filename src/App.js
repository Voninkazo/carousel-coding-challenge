import React, { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'

import data from './data.json'

function App() {
  const [sliceStartIndex, setSliceStartIndex] = useState(0)
  const [sliceEndIndex, setSliceEndIndex] = useState(4)

  const [carouselData, setCarouselData] = useState(
    data.slice(sliceStartIndex, sliceEndIndex)
  )

  function slideToLeft() {
    console.log('prev')
    setSliceStartIndex(sliceStartIndex - 4)
    setSliceEndIndex(sliceStartIndex)
  }

  function slideToRight() {
    setSliceStartIndex(sliceStartIndex + 4)
    setSliceEndIndex(sliceEndIndex + 4)
  }

  // Get four block from the array when the slice arguments change

  useEffect(() => {
    setCarouselData([...data].slice(sliceStartIndex, sliceEndIndex))
  }, [sliceEndIndex, sliceStartIndex])

  return (
    <>
      <div className='p-8 flex gap-4'>
        {carouselData.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>

      <div className='flex justify-center gap-6 '>
        <Button
          onClick={slideToLeft}
          buttonText='Prev'
          isDisabled={sliceStartIndex === 0 ? true : false}
        />
        <Button
          onClick={slideToRight}
          buttonText='Next'
          isDisabled={sliceEndIndex === data.length ? true : false}
        />
      </div>
    </>
  )
}

export default App
