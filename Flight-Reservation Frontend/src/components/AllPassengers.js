import React, { Component } from 'react'
import { generatePath, useNavigate} from 'react-router-dom';
import PassengerService from '../services/PassengerService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class AllPassengers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                passengers: []
        }
        this.addPassenger = this.addPassenger.bind(this);
        this.editPassenger = this.editPassenger.bind(this);
        this.deletePassenger = this.deletePassenger.bind(this);
    }


    deletePassenger(id){
        PassengerService.deletePassenger(id).then( res => {
            this.setState({Passengers: this.state.passengers.filter(Passenger => Passenger.id !== id)});
        });
    }
    viewPassenger(id){
        this.props.history.push(`/viewPassenger/${id}`);
    }
    editPassenger(id){
        this.props.history.push(`/updatePassenger/${id}`);
    }


    addPassenger(){
        this.props.history.push('/addPassenger');
    }

    componentDidMount(){
        PassengerService.getPassengers().then((response) => {
            this.setState({ passengers: response.data});
        });
    }

    render() {
        
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        return (
            <div>
                 <h2 className="text-center">Passenger List</h2>
                 <div className = "row">
                    <a href ="/addPassenger" className="btn btn-primary"> Add Passenger</a>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> Usename</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Gender</th>
                                  {/*  <th> No. of Tickets</th>*/}
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.passengers.map(
                                        Passenger => 
                                        <tr key = {Passenger.id}>
                                             <td> { Passenger.id} </td>
                                             <td> { Passenger.username} </td>
                                             <td> { Passenger.firstName} </td>   
                                             <td> {Passenger.lastName}</td>
                                             <td> {Passenger.email}</td>
                                             <td> { Passenger.gender} </td>
                                           {/*  <td> { Passenger.nooftickets} </td>*/}
                                             <td>
                                                 {/* <a href = "/updatePassenger/:id" className="btn btn-info">Update </a> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePassenger(Passenger.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /> </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewPassenger(Passenger.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default AllPassengers