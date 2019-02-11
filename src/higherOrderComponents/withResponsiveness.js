import React, { useState, useEffect } from 'react'

const withResponsiveness = ChartComponent => props => {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  const setContainer = el => {
    // console.log(el.getBoundingClientRect())
    if (el) {
      setWidth(el.getBoundingClientRect().width)
      setHeight(width * 0.75)
    }
  }

  useEffect(() => {
    // set window resize event listeners

    // return remove event listeners
  })

  const notNull = width !== null && height !== null

  return (
    <div ref={el => setContainer(el)}>
      {notNull && <ChartComponent width={width} height={height} {...props} /> }
    </div>
  )
}

export default withResponsiveness
