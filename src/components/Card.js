import React from 'react'

export function Card({ title, img, className }) {
  return (
    <div className={`card ${className} `}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}
