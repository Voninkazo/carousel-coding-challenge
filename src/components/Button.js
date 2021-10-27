import React from 'react'
// cn is a package that combines classnames together
import cn from 'classnames'

export function Button({ onClick, isDisabled, buttonText }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        'px-8 py-4 bg-black text-white hover:bg-red',
        `${isDisabled && 'cursor-not-allowed bg-gray-400 '}`
      )}>
      {buttonText}
    </button>
  )
}
