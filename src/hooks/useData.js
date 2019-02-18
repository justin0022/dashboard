import { useState, useEffect } from 'react'
import get from '../service/api'

const useData = dataURL => {
  const [data, setData] = useState(null)

  useEffect(() => {
    get(dataURL).then(data => setData(data))
  }, [dataURL])

  return data
}

export default useData
