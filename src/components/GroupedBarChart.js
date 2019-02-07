import React, { useEffect, memo } from 'react'
import createGroupedBarChart from './viz/createGroupedBarChart'

const GroupedBarChart = memo(props => {
  useEffect(() => createGroupedBarChart(props))
  return (
    <div id={props.id} />
  )
})

export default GroupedBarChart
