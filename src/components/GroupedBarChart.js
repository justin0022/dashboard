import React, { useEffect, memo } from 'react'
import { destroyChart } from '../util/chartUtil'
import createGroupedBarChart from './viz/createGroupedBarChart'

const GroupedBarChart = memo(props => {
  useEffect(() => {
    createGroupedBarChart(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default GroupedBarChart
