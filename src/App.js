import React, { useEffect, useState } from 'react'

import cn from 'classnames'

import { Button } from './components/Button'
import { Block } from './components/Block'
import { Loading } from './components/Loading'

import { getCarouselData } from './data-fetch-helper'

const MAX_DISPLAYED_BLOCKS = 4

function App() {
  const [sliceStartIndex, setSliceStartIndex] = useState(0)
  const [allBlocksData, setAllBlocksData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [carouselData, setCarouselData] = useState(
    allBlocksData.slice(sliceStartIndex, sliceStartIndex + MAX_DISPLAYED_BLOCKS)
  )

  const isNextBtnDisabled =
    sliceStartIndex + MAX_DISPLAYED_BLOCKS > allBlocksData.length ||
    allBlocksData.length <= 4

  function slideToLeft() {
    setSliceStartIndex(sliceStartIndex - MAX_DISPLAYED_BLOCKS)
  }

  function slideToRight() {
    setSliceStartIndex(sliceStartIndex + MAX_DISPLAYED_BLOCKS)
  }

  useEffect(() => {
    async function fetchCarouselData() {
      const carouselData = await getCarouselData()

      if (carouselData) {
        setAllBlocksData(carouselData)
        setIsLoading(false)
      }
    }

    fetchCarouselData()
  }, [])

  // Get four blocks from the array when the slice arguments change
  useEffect(() => {
    // Only get 4 blocks from the list of all blocks
    setCarouselData(
      [...allBlocksData].slice(
        sliceStartIndex,
        sliceStartIndex + MAX_DISPLAYED_BLOCKS
      )
    )
  }, [sliceStartIndex, allBlocksData])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div
            id='card-container'
            className='p-8 flex justify-center gap-4 flex-wrap'>
            {carouselData.map((block, index) => (
              <Block block={block} key={index} />
            ))}
          </div>

          <div
            id='button-container'
            className={cn('flex justify-center gap-6  py-8 px-6')}>
            <Button
              id='prev'
              onClick={slideToLeft}
              buttonText='Prev'
              isDisabled={sliceStartIndex === 0}
            />
            <Button
              id='next'
              onClick={slideToRight}
              buttonText='Next'
              isDisabled={isNextBtnDisabled}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
