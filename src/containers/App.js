import React, { useState } from 'react'
import DashboardAppBar from '../components/DashboardAppBar'
import SideDrawer from '../components/SideDrawer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Grades from './Grades'
import Assignments from './Assignments'
import Home from './Home'
import './App.css'

const App = () => {
  const [sideDrawerState, setSideDrawerState] = useState(false)

  return (
    <Router>
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
