import React, { useEffect, useState, memo } from 'react'
import createLineChart from './viz/createLineChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const LineChart = memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      createLineChart({ ...props, el })
      return () => destroyChart(el)
    }
  })
  return (
    <div ref={el => setEl(el)} />
  )
})

export default withResponsiveness(LineChart)
