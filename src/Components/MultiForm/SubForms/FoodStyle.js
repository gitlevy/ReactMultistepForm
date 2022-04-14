import React, { useRef } from 'react'
import './SubForm.css'

export default function FoodStyle({modifyIndex}) {
    
    const preventFunc = e => {
        e.preventDefault()

        const styleFoodData = {
            foodStyle: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked) {
                styleFoodData.foodStyle.push(checkbox.value)
            }
        })

        modifyIndex(4, styleFoodData)
    }

    const handleReturn = () => {
        modifyIndex(2)
    }

    const allCheckboxes = useRef([])

    const addCheckbox = elem => {
        if(elem && !allCheckboxes.current.includes(elem)) {
            allCheckboxes.current.push(elem)
        }
    }
  
    return (
        
      <form className="checkbox-form" onSubmit={preventFunc}>
          <p>Quelles sont tes cuisines préférées ?</p>
          <span>Choix multiples</span>

          <label htmlFor="italian">Italienne</label>
          <input ref={addCheckbox} type="checkbox" id="italian" value="italian" />

          <label htmlFor="japanese">Japonaise</label>
          <input ref={addCheckbox} type="checkbox" id="japanese" value="japanese" />

          <label htmlFor="indian">Indienne</label>
          <input ref={addCheckbox} type="checkbox" id="indian" value="indian" />

          <label htmlFor="thaï">Thaïlandaise</label>
          <input ref={addCheckbox} type="checkbox" id="thaï" value="thaï" />

          <label htmlFor="french">Française</label>
          <input ref={addCheckbox} type="checkbox" id="french" value="french" />

          <label htmlFor="chinese">Chinoise</label>
          <input ref={addCheckbox} type="checkbox" id="chinese" value="chinese" />

          <div className="container-nav-btns">
              <button type="button" className='prev'onClick={handleReturn}>Précédent</button>

              <button>Valider</button>
          </div>
      </form>
  )
}
