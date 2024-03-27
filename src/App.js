import React from 'react'
import './App.css';
import Home from './pages/Home';
import { appointmentData, doctorData } from './helpers/Data';


const App = () => {
  return (
    <div>
      <Home appointmentData={appointmentData} doctorData={doctorData} />
    </div>
  )
}

export default App
