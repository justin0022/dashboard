import React, { useEffect, memo } from 'react'
import createHistogram from './viz/createHistogram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const Histogram = memo(props => {
  useEffect(() => {
    createHistogram(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default withResponsiveness(Histogram)
