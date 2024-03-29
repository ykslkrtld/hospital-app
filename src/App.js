import React from 'react';
import './App.css';
import Home from './pages/Home';
import { doctorData } from './helpers/Data';

const App = () => {
  return (
    <div>
      <Home doctorData={doctorData} />
    </div>
  );
}

export default App;
