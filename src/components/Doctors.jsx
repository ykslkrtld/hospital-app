import React, { useState } from 'react';
import AddModal from './AddModal';
import AppointmentList from './AppointmentList';

const Doctors = ({ appointmentData, doctorData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointments, setAppointments] = useState([]);

  const handleModal = (doctorName) => {
    setSelectedDoctor(doctorName);
    setShowModal(true);
  };

  return (
    <>
      <h2 className="title-doctors text-center mb-4">Our Doctors</h2>
      <div className="doctors-container">
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
      <AppointmentList appointments={appointments} setAppointments={setAppointments} />
      {showModal && (
        <AddModal
          doctorName={selectedDoctor}
          setShowModal={setShowModal}
          showModal={showModal} 
          setAppointments={setAppointments}
          appointments={appointments}
        />
      )}
    </>
  );
};

export default Doctors;