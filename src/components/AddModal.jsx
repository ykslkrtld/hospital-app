import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddModal = ({ doctorName, setShowModal, showModal, setAppointments, appointments }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handlePatientName = (e) => {
    setPatientName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const appointment = {
      patientName,
      date,
      doctorName
    };
    console.log(appointments)
    setAppointments([...appointments, appointment]);
    // setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment for {doctorName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={patientName}
              onChange={handlePatientName}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="datetime-local" onChange={handleDate} value={date} required/>
          </Form.Group>

          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="success" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;