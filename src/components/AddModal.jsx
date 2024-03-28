import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddModal = ({ doctorName, setShowModal }) => {
  return (
    <Form className='container w-50 mt-5 border border-2'>
      <h3>Appointment for {doctorName}</h3> <hr />
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      
      <Button variant="success mx-2" type="submit">
        Submit
      </Button>

      <Button variant="danger" type="button" onClick={() => setShowModal(false)}>
        Close
      </Button>
    </Form>
    
  )
}

export default AddModal