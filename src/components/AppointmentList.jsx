import React from 'react';


function AppointmentList({ appointments, setAppointments }) {

    const handleClear = (index) => {
        const updatedAppointments = appointments.filter((item, i) => i !== index);
        setAppointments(updatedAppointments);
        alert("Are you sure")
      };

  return (
    <div >
      <h2 className="title-list text-center my-2">Appointment List</h2>
      <div className="listContainers">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div className='list-container' key={index}>
              <div>
                <h4>{appointment.patientName}</h4>
                <h5>{appointment.doctorName}</h5>
              </div>
              <div>
                <h4>Date: {appointment.date.slice(0,10)}</h4>
                <h5>Time: {appointment.date.slice(11)}:00</h5>
              </div>
              <div className='clear-btn'>
                <button className='bg-danger rounded-5 text-white border border-0' onClick={()=>handleClear(index)}><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          ))
        ) : (
          <div className="default-image-container">
            <p>No appointments available</p>
            <img src="./img/appointment.jpg" alt="Default"/>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentList;