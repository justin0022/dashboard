import React, { useState, useEffect } from 'react'
import { optimizedResize } from '../util/chartUtil'

const withResponsiveness = ChartComponent => props => {
  const [el, setEl] = useState(null)
  const [width, setWidth] = useState(null)

  const setContainer = el => {
    if (el) {
      setEl(el)
      setWidth(el.getBoundingClientRect().width)
    }
  }

  useEffect(() => {
    optimizedResize.add(() => setContainer(el))
    return window.removeEventListener('resize', () => setContainer(el))
  })

  const notNull = (width !== null)

  return (
    <div ref={el => setContainer(el)}>
      {notNull && <ChartComponent width={width} height={width * 0.75} {...props} /> }
    </div>
  )
}

export default withResponsiveness
