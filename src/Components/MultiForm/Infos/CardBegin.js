import React from 'react'
import './Card.css'

export default function CardBegin({modifyIndex}) {
  return (
    <div className='card'>
        <h1>🍣 Aides-nous à ravir tes papilles 🌶️</h1>
        <button onClick={() => modifyIndex(2) }>COMMENCER</button>
    </div>
  )
}