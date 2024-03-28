import React from 'react';
import Doctors from '../components/Doctors';

const Home = ({ appointmentData, doctorData }) => {
  return (
    <div>
      <h1 className='text-center mt-4'>YKSL Hospital</h1>
      <Doctors appointmentData={appointmentData} doctorData={doctorData} />
    </div>
  );
}

export default Home;
