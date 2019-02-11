import React, { useEffect, memo } from 'react'
import createGroupedBarChart from './viz/createGroupedBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const GroupedBarChart = memo(props => {
  useEffect(() => {
    createGroupedBarChart(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default withResponsiveness(GroupedBarChart)
