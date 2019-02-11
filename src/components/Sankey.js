import React, { useEffect, useState, memo } from 'react'
import createSankeyDiagram from './viz/createSankeyDiagram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const Sankey = memo(props => {
  const [el, setEl] = useState(null)

  useEffect(() => {
    if (el) {
      createSankeyDiagram({ ...props, el })
      return () => destroyChart(el)
    }
  })
  return (
    <div ref={el => setEl(el)} />
  )
})

export default withResponsiveness(Sankey)
