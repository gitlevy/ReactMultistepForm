import React, { useState } from 'react'
import './SubForm.css'

export default function DietForm({modifyIndex}) {

  const [formData, setFormData] = useState({
    dietForm: "nodiet"
  })

  const preventFunc = e => {
      e.preventDefault()
  }

  const handleRadio = e => {
    setFormData({
      dietForm: e.target.value
    })
  }

  return (
    
    <form onSubmit={preventFunc} className="diet-form">

        <p>Quelle est ton régime alimentaire ?</p>

        <label htmlFor="nodiet">Pas de régime en particulier</label>
        <input type="radio" name="diet" id="nodiet" value="nodiet" onChange={handleRadio} />

        <label htmlFor="omnivore">Omnivore</label>
        <input type="radio" name="diet" id="omnivore" value="omnivore" onChange={handleRadio} />

        <label htmlFor="vegetarian">Végétarien</label>
        <input type="radio" name="diet" id="vegetarian" value="vegetarian" onChange={handleRadio} />

        <label htmlFor="vegan">Vegan</label>
        <input type="radio" name="diet" id="vegan" value="vegan" onChange={handleRadio} />

        <button onClick={() => modifyIndex(3, formData)}>Valider</button>
    </form>
  )
}
