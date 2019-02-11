import React, { useEffect, memo } from 'react'
import createBarChart from './viz/createBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const BarChart = memo(props => {
  useEffect(() => {
    createBarChart(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default withResponsiveness(BarChart)
