import React from 'react'

import data from './data.json'

function App() {
  return (
    <div>
      {data.map((card, index) => {
        return (
          <div key={index}>
            <h2>{card.title}</h2>
            <div>
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
