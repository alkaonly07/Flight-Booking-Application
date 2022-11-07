import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import FlightService from '../services/FlightService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";


const ListFlight = () => {

    const [flights , setFlights] = useState([])

    useEffect(() => {
        
        getAllFlights();
    }, [])

    const navigate=useNavigate();

    const getAllFlights = () => {
        FlightService.getAllFlights().then ((response) => {
            setFlights(response.data)
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const editFlight = (flightId) => {
        FlightService.updateFlight(flightId).then ((response) => {
            setFlights(response.data)
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteFlight = (flightId) => {
        FlightService.deleteFlight(flightId).then((response) => {
            getAllFlights();

        }).catch(error => {
            // console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className="text-center">Flights List</h2>
        <Link to = "/addFlight" className="btn btn-primary mb-2">Add Flight</Link>
        
        <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Ticket Price</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                                <th>Date</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flights.map(
                                    flight =>
                                    <tr key = {flight.id} >
                                        <td> {flight.code} </td>
                                        <td> {flight.from} </td>
                                        <td> {flight.to} </td>
                                        <td> {flight.price} </td>
                                        <td> {flight.departTime} </td>
                                        <td> {flight.arrivalTime} </td>
                                        <td> {flight.depart} </td>
                                        
                                        <td>
                                            <Link className="btn btn-warning" to = {`/editFlight/${flight.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                            <button className="btn btn-danger" onClick = {() => deleteFlight(flight.id)}
                                            style = {{marginLeft:"10px"}}><FontAwesomeIcon icon={faTrash} /></button>
                                        </td>
                                        

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <div>
        <button className="btn btn-success" style={{width: '8rem',color: 'white'}} onClick={() => navigate(-1)}><strong><FontAwesomeIcon icon={faLeftLong} />Back</strong></button>
      </div>

    </div>
  )
}

export default ListFlight













// import React, { useEffect } from 'react'
// import {useState} from 'react'
// import {Link} from 'react-router-dom'
// import FlightService from '../services/FlightService'

// const ListFlight = () => {

//     const [flights , setFlights] = useState([])

//     useEffect(() => {
        
//         getAllFlights();
//     }, [])

//     const getAllFlights = () => {
//         FlightService.getAllFlights().then ((response) => {
//             setFlights(response.data)
//             // console.log(response.data);
//         }).catch(error => {
//             console.log(error);
//         })
//     }

//     const editFlight = (flightId) => {
//         FlightService.updateFlight(flightId).then ((response) => {
//             setFlights(response.data)
//             // console.log(response.data);
//         }).catch(error => {
//             console.log(error);
//         })
//     }

//     const deleteFlight = (flightId) => {
//         FlightService.deleteFlight(flightId).then((response) => {
//             getAllFlights();

//         }).catch(error => {
//             // console.log(error);
//         })
//     }

//   return (
//     <div className="container">
//         <h2 className="text-center">List Flights</h2>
//         <Link to = "/addFlight" className="btn btn-primary mb-2">Add Flight</Link>
        
//         <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Flight Number</th>
//                                 <th>Flight Origin</th>
//                                 <th>Flight Destination</th>
//                                 <th>Flight Date</th>
//                                 <th>Actions</th>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 flights.map(
//                                     flight =>
//                                     <tr key = {flight.id} >
//                                         <td> {flight.flightNumber} </td>
//                                         <td> {flight.origin} </td>
//                                         <td> {flight.destination} </td>
//                                         <td> {flight.flightDate} </td>
//                                         <td>
//                                             <Link className="btn btn-warning" to = {`/editFlight/${flight.id}`}>Update</Link>
//                                             <button className="btn btn-danger" onClick = {() => deleteFlight(flight.id)}
//                                             style = {{marginLeft:"10px"}}>Delete</button>
//                                         </td>
                                        

//                                     </tr>
//                                 )
//                             }
//                         </tbody>

//                     </table>

//     </div>
//   )
// }

// export default ListFlight