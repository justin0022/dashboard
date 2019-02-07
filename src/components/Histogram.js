import React, { useEffect, memo } from 'react'
import createHistogram from './viz/createHistogram'

const Histogram = memo(props => {
  useEffect(() => createHistogram(props))
  return (
    <div id={props.id} />
  )
})

export default Histogram
