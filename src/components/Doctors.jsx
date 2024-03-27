import React, { useState } from "react";
import AddModal from "./AddModal";

const Doctors = ({ appointmentData, doctorData }) => {
  // console.log(appointmentData);
  const [showModal, setShowModal] = useState(false);
  const handleModal = (e) => {
    console.log(e.target.alt);
    setShowModal(!showModal);
  };
  return !showModal ? (
    <div className="doctors-container">
      {doctorData.map((doctor) => (
        <div key={doctor.id} className="doctor-card" onClick={handleModal}>
          <img src={doctor.img} alt={doctor.name} />
          <h3>{doctor.name}</h3>
          <h4>{doctor.dep}</h4>
        </div>
      ))}
    </div>
  ) : (
    <AddModal />
  );
};

export default Doctors;