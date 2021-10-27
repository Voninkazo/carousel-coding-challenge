import React, { useEffect, useState } from 'react'

import { Button } from './components/Button'
import { Card } from './components/Card'
import { Loading } from './components/Loading'

import { getCarouselData } from './data-fetch-helper'

const MAX_IMAGES = 4
function App() {
  const [sliceStartIndex, setSliceStartIndex] = useState(0)
  const [allBlocksData, setAllBlocksData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [carouselData, setCarouselData] = useState(
    allBlocksData.slice(sliceStartIndex, sliceStartIndex + MAX_IMAGES)
  )

  function slideToLeft() {
    setSliceStartIndex(sliceStartIndex - MAX_IMAGES)
  }

  function slideToRight() {
    setSliceStartIndex(sliceStartIndex + MAX_IMAGES)
  }

  // Get four blocks from the array when the slice arguments change

  useEffect(() => {
    setCarouselData(
      [...allBlocksData].slice(sliceStartIndex, sliceStartIndex + MAX_IMAGES)
    )
  }, [sliceStartIndex, allBlocksData])

  const isNextDisabled =
    sliceStartIndex + MAX_IMAGES > allBlocksData.length ||
    allBlocksData.length <= 4

  useEffect(async () => {
    const carouselData = await getCarouselData()
    setAllBlocksData(carouselData)
    if (carouselData) {
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className='p-8 flex gap-4'>
            {carouselData.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>

          <div className='flex justify-center gap-6 '>
            <Button
              onClick={slideToLeft}
              buttonText='Prev'
              isDisabled={sliceStartIndex === 0}
            />
            <Button
              onClick={slideToRight}
              buttonText='Next'
              isDisabled={isNextDisabled}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
