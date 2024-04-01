import React, { useState, useEffect } from 'react';
import AddModal from './AddModal';
import AppointmentList from './AppointmentList';

const Doctors = ({doctorData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem("appointments");
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  const handleModal = (doctorName) => {
    setSelectedDoctor(doctorName);
    setShowModal(true);
  };

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <div className='ourDoctors'>
      <h2 className="title-doctors text-center mb-4">Our Doctors</h2>
      <div id='doctors' className="doctors-container">
        {doctorData.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img
              src={doctor.img}
              alt={doctor.name}
              onClick={() => handleModal(doctor.name)}
            />
            <h5>{doctor.name}</h5>
            <p>{doctor.dep}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <AddModal
        doctorName={selectedDoctor}
        setShowModal={setShowModal}
        showModal={showModal} 
        setAppointments={setAppointments}
        appointments={appointments}
        />
        )}
        <AppointmentList appointments={appointments} setAppointments={setAppointments} />
    </div>
  );
};

export default Doctors;