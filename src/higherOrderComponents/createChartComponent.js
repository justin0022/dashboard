import React, { useEffect, useState, memo } from 'react'
import { destroyChart } from '../util/chartUtil'
import getJSONFromGist from '../service/api'

const createChartComponent = chart => memo(props => {
  const { dataURL } = props
  const [el, setEl] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    getJSONFromGist(dataURL)
      .then(data => setChartData(data))
  }, [dataURL])

  useEffect(() => {
    if (el && chartData) {
      chart({ ...props, el, data: chartData })
      return () => destroyChart(el)
    }
  })

  return (
    <div ref={el => setEl(el)} />
  )
})

export default createChartComponent
