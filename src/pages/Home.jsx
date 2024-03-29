import React from 'react';
import Doctors from '../components/Doctors';

const Home = ({  doctorData }) => {
  return (
    <div className='home-container'>
      <h1 className='text-center my-3'>YKSL HOSPITAL</h1>
      <Doctors doctorData={doctorData} />
    </div>
  );
}

export default Home;
