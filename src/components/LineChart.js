import React, { useEffect, memo } from 'react'
import createLineChart from './viz/createLineChart'

const LineChart = memo(props => {
  useEffect(() => createLineChart(props))
  return (
    <div id={props.id} />
  )
})

export default LineChart
