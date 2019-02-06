import React, { useState } from 'react'
import DashboardAppBar from '../components/DashboardAppBar'
import './App.css'

const App = () => {
  const [sideDrawer, setSideDrawer] = useState(false)

  return (
    <div>
      <DashboardAppBar />
    </div>
  )
}

export default App
