import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardAppBar from '../components/DashboardAppBar'
import SideDrawer from '../components/SideDrawer'
import Grades from './Grades'
import Assignments from './Assignments'
import Home from './Home'

const App = () => {
  const [sideDrawerState, setSideDrawerState] = useState(false)

  return (
    <Router basename='/dashboard/'>
      <div>
        <DashboardAppBar onMenuBarClick={setSideDrawerState} sideDrawerState={sideDrawerState} />
        <SideDrawer toggleDrawer={setSideDrawerState} sideDrawerState={sideDrawerState} />
        <Route path='/' exact component={Home} />
        <Route path='/Grades/' component={Grades} />
        <Route path='/Assignments/' component={Assignments} />
      </div>
    </Router>
  )
}

export default App