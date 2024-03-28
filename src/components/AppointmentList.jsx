import React from 'react';


function AppointmentList({ appointments, setAppointments }) {

    const handleClear = (index) => {
        const updatedAppointments = appointments.filter((item, i) => i !== index);
        setAppointments(updatedAppointments);
      };

  return (
    <div className="d-flex flex-column border border-2">
      <h1 className="text-center">Appointment List</h1>
      <div className="d-flex justify-content-evenly">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div key={index}>
              <h3>{appointment.patientName}</h3>
              <h3>{appointment.doctorName}</h3>
              <h3>Date: {appointment.date.slice(0,10)}</h3>
              <h3>Time: {appointment.date.slice(11)}</h3>
              <button onClick={()=>handleClear(index)}>Sil</button>

            </div>
          ))
        ) : (
          <div className="default-image-container">
            <img src="./img/appointment.jpg" alt="Default" width="250px" />
            <p>No appointments available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentList;