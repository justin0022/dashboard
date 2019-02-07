import React, { useEffect, memo } from 'react'
import createBarChart from './viz/createBarChart'

const BarChart = memo(props => {
  useEffect(() => createBarChart(props))
  return (
    <div id={props.id} />
  )
})

export default BarChart
