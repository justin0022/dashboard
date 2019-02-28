import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardAppBar from '../components/DashboardAppBar'
import SideDrawer from '../components/SideDrawer'
import Student from './Student'
import Instructor from './Instructor'
import Home from './Home'
import Help from './Help'

const App = () => {
  const [sideDrawerState, setSideDrawerState] = useState(false)

  const user = {
    firstName: 'Justin',
    lastName: 'Lee',
    email: 'something@something.ca',
    numberOfNotifications: 15
  }

  return (
    <Router basename='/dashboard/'>
      <div>
        <DashboardAppBar onMenuBarClick={setSideDrawerState} sideDrawerState={sideDrawerState} user={user} />
        <SideDrawer toggleDrawer={setSideDrawerState} sideDrawerState={sideDrawerState} />
        <Route path='/' exact component={Home} />
        <Route path='/Instructor/' component={Instructor} />
        <Route path='/Student/' component={Student} />
        <Route path='/Help/' component={Help} />
      </div>
    </Router>
  )
}

export default App
