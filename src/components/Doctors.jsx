import React, { useState } from "react";
import AddModal from "./AddModal";

const Doctors = ({ appointmentData, doctorData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleModal = (doctorName) => {
    setSelectedDoctor(doctorName);
    setShowModal(!showModal);
  };

  return !showModal ? (
    <div className="doctors-container">
      {doctorData.map((doctor) => (
        <div key={doctor.id} className="doctor-card" onClick={() => handleModal(doctor.name)}>
          <img src={doctor.img} alt={doctor.name} />
          <h3>{doctor.name}</h3>
          <h4>{doctor.dep}</h4>
        </div>
      ))}
    </div>
  ) : (
    <AddModal doctorName={selectedDoctor} setShowModal={setShowModal} />
  );
};

export default Doctors;
