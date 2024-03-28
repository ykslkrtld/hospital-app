import React from 'react';
import { appointmentData } from '../helpers/Data';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="d-flex flex-column border border-2">
      <h1 className="text-center">Appointment List</h1>
      <div className="d-flex justify-content-evenly">
        {appointments.map((appointment, index) => (
          <div key={index}>
            <h3>{appointment.patientName}</h3>
            <h3>{appointment.doctorName}</h3>
            <h3>{appointment.date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentList;