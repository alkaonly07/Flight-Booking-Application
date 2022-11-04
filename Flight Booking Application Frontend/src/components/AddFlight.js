

 import React, { useState , useEffect } from 'react'
 import { useNavigate , useParams } from 'react-router-dom';
 import FlightService from '../services/FlightService'

 const AddFlight = () => {

   const [flightNumber , setFlightNumber] = useState('')
   const [origin , setOrigin] = useState('')
   const [destination , setDestination] = useState('')
   const [flightDate , setDate] = useState('')
   const navigate = useNavigate();
   const {id} = useParams();

   const saveOrUpdateFlight = (e) => {
     e.preventDefault();

     const flight = {flightNumber, origin, destination, flightDate}

     if(id){
       FlightService.updateFlight(id,flight).then((response) => {

         navigate('/flights')
       }).catch(error => {
         console.log(error);
       })

     }else{

       FlightService.createFlight(flight).then((response) => {

         console.log(response.data)
  
         navigate('/flights')
  
       }).catch(error => {
          console.log(error)
       })
     }

     FlightService.createFlight(flight).then((response) => {

       console.log(response.data)

       navigate('/flights')

    }).catch(error => {
        console.log(error)
     })

   }

   useEffect(() => {

     FlightService.getFlightById(id).then((response) => {

       setFlightNumber(response.data.flightNumber)
       setOrigin(response.origin)
       setDestination(response.destination)
       setDate(response.setDate)
    }).catch(error => {
        console.log(error)
     })
   
   }, [])

   const title = () => {
     if(id){
       return <h2 className="text-center">Update Flight</h2>

     }else{
       return <h2 className="text-center">Add Flight</h2>
     }
   }
  
  
   return (
     <div>
       <br/>
       <br/>
       <div className="container">
         <div className="row">
           <div className="card col-md-6 offset-md-3 offset-md-3">
             {
               title()
             }
             <div className="card-body">
               <form>
                 <div className="form-group mb-2">
                   <label className="form-label">Flight Number </label>
                   <input
                       type = "text"
                       placeholder="Enter Flight Number"
                       name = "flightNumber"
                       className="form-control"
                       value = {flightNumber}
                       onChange = {(e) => setFlightNumber(e.target.value)}>
                   </input>

                 </div>

                 <div className="form-group mb-2">
                   <label className="form-label">Flight Origin </label>
                   <input
                       type = "text"
                       placeholder="Enter Flight Origin"
                       name = "origin"
                       className="form-control"
                       value = {origin}
                      onChange = {(e) => setOrigin(e.target.value)}>
                   </input>

                 </div>

                 <div className="form-group mb-2">
                   <label className="form-label">Flight Destination </label>
                   <input
                       type = "text"
                       placeholder="Enter Flight Destination"
                      name = "destination"
                       className="form-control"
                       value = {destination}
                       onChange = {(e) => setDestination(e.target.value)}>
                   </input>

                 </div>

                 <div className="form-group mb-2">
                   <label className="form-label">Flight Date </label>
                   <input
                       type = "date"
                       placeholder="Enter Flight Date"
                       name = "flightDate"
                       className="form-control"
                       value = {flightDate}
                       onChange = {(e) => setDate(e.target.value)}>
                   </input>

                 </div>

                 <button className="btn btn-success" onClick ={(e) => saveOrUpdateFlight(e)}>Submit</button>
                  {/* <a href="/bookings" className="btn btn-success" onClick={() => navigate("/bookings")} style={{marginTop: "10px"}}>Submit</a>  */}



               </form>
             </div>


           </div>

         </div>

       </div>
      
     </div>
   )
 }

 export default AddFlight