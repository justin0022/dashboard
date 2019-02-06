import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul className="header">
        <li><a href="/">Home</a></li>
        <li><a href="/studentDashboard">Student Dashboard</a></li>
        <li><a href="/instructorDashboard">Instructor Dashboard</a></li>
      </ul>
      <div className="content">

      </div>
    </div>
  )
}

export default App
