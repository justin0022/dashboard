import React, { useEffect, memo } from 'react'
import createSankeyDiagram from './viz/createSankeyDiagram'
import withResponsiveness from '../higherOrderComponents/withResponsiveness'
import { destroyChart } from '../util/chartUtil'

const Sankey = memo(props => {
  useEffect(() => {
    createSankeyDiagram(props)
    return () => destroyChart(props.id)
  })
  return (
    <div id={props.id} />
  )
})

export default withResponsiveness(Sankey)
