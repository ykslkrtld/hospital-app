import React from 'react';
import Doctors from '../components/Doctors';

const Home = ({ appointmentData, doctorData }) => {
  return (
    <div className='home-container'>
      <h1 className='text-center my-3'>YKSL HOSPITAL</h1>
      <Doctors appointmentData={appointmentData} doctorData={doctorData} />
    </div>
  );
}

export default Home;
