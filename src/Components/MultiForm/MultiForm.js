import React, { useState } from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CardBegin from './Infos/CardBegin'
import CartEnd from './Infos/CartEnd'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'
import HateLove from './SubForms/HateLove'

export default function MultiForm() {

  const [formIndex, setFormIndex] = useState(1)
  
  const [allFormData, setAllFormData] = useState({
      dietForm: "",
      foodStyle: [],
      allergies: [],
      pref: {}
  })
  
  const modifyIndex = (index, data) => {
    setFormIndex(index)

    if(data) {
      const newData = {...allFormData}
      const firstPropNewData = Object.keys(data)[0]

      newData[firstPropNewData] = data[firstPropNewData]
      setAllFormData(newData)
    }
  }

  const steps = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,
    <CartEnd modifyIndex={modifyIndex} />
  ]

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex} />

      { steps.map((step, index) => {
          if(index + 1 === formIndex) {
            return step
          }
        })
      }
    </div>
  )
}
