import React from 'react';
import Doctors from '../components/Doctors';

const Home = ({ appointmentData, doctorData }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Doctors appointmentData={appointmentData} doctorData={doctorData} />
    </div>
  );
}

export default Home;
