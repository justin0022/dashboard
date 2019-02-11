import React, { useEffect, useState, memo } from 'react'
import createGroupedBarChart from './viz/createGroupedBarChart'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const GroupedBarChart = memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      createGroupedBarChart({ ...props, el })
      return () => destroyChart(el)
    }
  })

  return (
    <div ref={el => setEl(el)} />
  )
})

export default withResponsiveness(GroupedBarChart)
