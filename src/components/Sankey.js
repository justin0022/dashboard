import React, { useEffect, memo } from 'react'
import createSankeyDiagram from './viz/createSankeyDiagram'

const Sankey = memo(props => {
  useEffect(() => createSankeyDiagram(props))
  return (
    <div id={props.id} />
  )
})

export default Sankey
