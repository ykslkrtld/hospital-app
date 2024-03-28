import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"

const Home = ({appointmentData, doctorData}) => {
  return (
    <div>
        <h1 className="text-center my-5">YKSL HOSPITAL</h1>
        <Doctors appointmentData={appointmentData} doctorData={doctorData}/>
        <AppointmentList/>
    </div>
  )
}

export default Home