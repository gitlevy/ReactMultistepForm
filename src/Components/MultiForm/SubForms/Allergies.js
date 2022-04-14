import React, { useRef } from 'react'
import './SubForm.css'

export default function Allergies({modifyIndex}) {
    
    const preventFunc = e => {
        e.preventDefault()

        const styleFoodData = {
            allergies: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked) {
                styleFoodData.allergies.push(checkbox.value)
            }
        })

        modifyIndex(5, styleFoodData)
    }

    const handleReturn = () => {
        modifyIndex(3)
    }

    const allCheckboxes = useRef([])

    const addCheckbox = elem => {
        if(elem && !allCheckboxes.current.includes(elem)) {
            allCheckboxes.current.push(elem)
        }
    }
  
    return (

      <form className="checkbox-form" onSubmit={preventFunc}>
          <p>As-tu des allergies ?</p>
          <span>Choix multiples</span>

          <label htmlFor="milk">Lait</label>
          <input ref={addCheckbox} type="checkbox" id="milk" value="milk" />

          <label htmlFor="pollen">Pollen</label>
          <input ref={addCheckbox} type="checkbox" id="pollen" value="pollen" />

          <label htmlFor="nuts">Noix</label>
          <input ref={addCheckbox} type="checkbox" id="nuts" value="nuts" />

          <label htmlFor="eggs">Oeufs</label>
          <input ref={addCheckbox} type="checkbox" id="eggs" value="eggs" />

          <label htmlFor="shellfish">Fruits de mer</label>
          <input ref={addCheckbox} type="checkbox" id="shellfish" value="shellfish" />

          <div className="container-nav-btns">
              <button type="button" className='prev'onClick={handleReturn}>Précédent</button>
              <button>Valider</button>
          </div>
      </form>
  )
}
