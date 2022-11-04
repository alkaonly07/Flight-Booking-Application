import React, { Component } from 'react';
import { generatePath, useNavigate} from 'react-router-dom';
import BookingService from '../services/BookingService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";




class Bookings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings:[]
        }
        this.bookFlight = this.bookFlight.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);

    }

    editBooking(id) {
        this.props.history.push(generatePath("/updateBooking/:id",{id}));
    }

    deleteBooking(id) {
        //Rest api
        BookingService.deleteBooking(id).then( res => {
            this.setState({
                bookings:this.state.bookings.filter(booking => booking.id !== id)
            });
        });
    }

    viewBooking(id) {
        <a href="/viewBooking/${id}" className = "btn btn-primary" > Book Your Flight ! </a>
        /*this.props.history.push(`/viewBooking/${id}`);*/
    }

    componentDidMount() {
        BookingService.getBookingList().then((response) => {
            this.setState({ bookings: response.data});

        });
    }

    bookFlight() {
        this.props.history.push('/addBooking');
    }

    render() {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        return (
            <div>
                <br></br>
                <h2 className = "text-center"> All Bookings </h2>
                <div className = "row">
                <table borderstyle="solid" bordercollapse="collapse" border="8 black" className = "table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th> Booking Id </th>
                            <th> Flight Number </th>
                            <th> Origin </th>
                            <th> Destination </th>
                            <th> Date of Flight </th>
                          {/*  <th> Date of Booking </th>*/}
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.map(
                                booking =>
                                <tr key = {booking.id}>
                                    <td> {booking.id} </td>
                                    <td> {booking.flightNumber} </td>
                                    <td> {booking.origin} </td>
                                    <td> {booking.destination} </td>
                                    <td> {booking.flightDate} </td>
                                 {/*   <td> {booking.bookingDate} </td>*/}
                                    <td>
                                       {/* <a href="/viewBooking/${id}" className = "btn btn-primary btn-sm" >Booking Details </a>*/}
                                       {/* <a href="/add-payment" className = "btn btn-primary btn-sm" >Book </a> */}
                                        {/* <button className="btn btn-info btn-sm" onClick={() => this.editBooking(booking.id)} style={{marginLeft: "10px"}}>Update</button> */}
                                        <button  onClick={() => this.deleteBooking(booking.id)} style={{marginLeft: "10px"}}><FontAwesomeIcon icon={faTrash} /></button>
                                        
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>

                <div className = "row">
                    <a href="/addBooking" className = "btn btn-warning" > Add Booking </a>
                </div>
            </div>
        )
    }
}

export default Bookings