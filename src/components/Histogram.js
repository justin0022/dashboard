import React, { useEffect, useState, memo } from 'react'
import createHistogram from './viz/createHistogram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const Histogram = memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      createHistogram({ ...props, el })
      return () => destroyChart(el)
    }
  })
  return (
    <div ref={el => setEl(el)} />
  )
})

export default withResponsiveness(Histogram)
