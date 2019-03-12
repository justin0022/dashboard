import { useState, useEffect } from 'react'
import get from '../service/api'

const useFetchAll = (...dataURL) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Promise.all(
      dataURL.map(url => get(url))
    ).then(data => setData(data))
  }, dataURL)

  return data
}

export default useFetchAll
