import React, { useEffect, useState, memo } from 'react'
import createBarChart from './viz/createBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const BarChart = memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      createBarChart({ ...props, el })
      return () => destroyChart(el)
    }
  })
  return (
    <div ref={el => setEl(el)} />
  )
})

export default withResponsiveness(BarChart)
