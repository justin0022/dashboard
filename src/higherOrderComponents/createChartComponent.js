import React, { useEffect, useState, memo } from 'react'
import { destroyChart } from '../util/chartUtil'

const createChartComponent = chart => memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      chart({ ...props, el })
      return () => destroyChart(el)
    }
  })
  return (
    <div ref={el => setEl(el)} />
  )
})

export default createChartComponent
