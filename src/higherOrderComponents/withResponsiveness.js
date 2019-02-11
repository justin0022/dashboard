import React, { useState, useEffect } from 'react'

const withResponsiveness = ChartComponent => props => {
  const [el, setEl] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  const setContainer = el => {
    if (el) {
      setEl(el)
      setWidth(el.getBoundingClientRect().width)
      setHeight(width * 0.75)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', setContainer(el))
    return window.removeEventListener('resize', setContainer(el))
  })

  const notNull = (width !== null && height !== null)

  return (
    <div ref={el => setContainer(el)}>
      {notNull && <ChartComponent width={width} height={height} {...props} /> }
    </div>
  )
}

export default withResponsiveness
