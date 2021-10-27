import React from 'react'

export function Button({ onClick, isDisabled, buttonText }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className='px-8 py-4 bg-black text-white'>
      {buttonText}
    </button>
  )
}
