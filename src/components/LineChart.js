import React, { useEffect, memo } from 'react'
import createLineChart from './viz/createLineChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const LineChart = memo(props => {
  useEffect(() => {
    createLineChart(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default withResponsiveness(LineChart)
