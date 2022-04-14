import React, { useState } from 'react'
import './SubForm.css'

export default function HateLove({ modifyIndex }) {

    const [formData, setFormData] = useState({
        pref: {
            love: "",
            hate: ""
        }
      })

    const handleTextarea = (e, pref) => {
        if(pref === "love") {
            setFormData({
                pref: {
                    ...formData.pref,
                    love: e.target.value
                }
            })
        } 
        else if (pref === 'hate') {
            setFormData({
                pref: {
                    ...formData.pref,
                    hate: e.target.value
                }
            })          
        }
    }

    const preventFunc = e => {
        e.preventDefault()
        modifyIndex(6, formData)
    }

    const handleReturn = () => {
        modifyIndex(4)
    }
  
    
    return (

    <form className="preferences-form" onSubmit={preventFunc}>

        <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>

        <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule :</label>
        <textarea 
            id="prefered" 
            placeholder="Un ou plusieurs, si tu en as"
            onChange={(e) => handleTextarea(e, 'love')} >
        </textarea>

        <label htmlFor="hated">Les aliments que tu ne supportes pas, séparés par une virgule :</label>
        <textarea 
            id="hated" 
            placeholder="Un ou plusieurs, si tu en as" 
            onChange={(e) => handleTextarea(e, 'hate')} >
        </textarea>

        <div className="container-nav-btns">
            <button type="button" className='prev'onClick={handleReturn}>Précédent</button>
            <button>Valider</button>
        </div>
    </form>
  )
}
