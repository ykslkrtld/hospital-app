import Doctors from "../components/Doctors"

const Home = ({appointmentData, doctorData}) => {
    console.log(doctorData)
  return (
    <div>
        <h1>MİLLET HOSPİTAL</h1>
        <Doctors appointmentData={appointmentData} doctorData={doctorData}/>
    </div>
  )
}

export default Home