import { useState, useEffect } from 'react'

const useFilter = (data, filter) => {
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(data.filter(filter))
  })

  return filteredData
}

export default useFilter
