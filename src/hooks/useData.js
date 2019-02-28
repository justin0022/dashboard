import { useState, useEffect } from 'react'
import get from '../service/api'

const cache = new Map()

const useData = dataURL => {
  const [data, setData] = useState(null)
  if (cache.has(dataURL)) {
    return cache.get(dataURL)
  }

  useEffect(() => {
    get(dataURL).then(data => {
      cache.set(dataURL, data)
      setData(data)
    })
  }, [dataURL])

  return data
}

export default useData
