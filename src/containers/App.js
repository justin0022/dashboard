import React, { useState } from 'react'
import DashboardAppBar from '../components/DashboardAppBar'
import SideDrawer from '../components/SideDrawer'
import './App.css'

const App = () => {
  const [sideDrawerState, setSideDrawerState] = useState(false)

  return (
    <div>
      <DashboardAppBar onMenuBarClick={setSideDrawerState} sideDrawerState={sideDrawerState} />
      <SideDrawer toggleDrawer={setSideDrawerState} sideDrawerState={sideDrawerState} />
    </div>
  )
}

export default App
