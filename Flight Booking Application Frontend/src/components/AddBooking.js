import React, { Component } from 'react';
import BookingService from '../services/BookingService';

class AddBooking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:'',
            flightNumber:'',
            origin:'',
            destination:'',
            flightDate:'',
            bookingDate:''
        }

        this.saveBooking = this.saveBooking.bind(this);
        this.handleid = this.handleid.bind(this);
        this.handleflightNumber = this.handleflightNumber.bind(this);
        this.handleorigin = this.handleorigin.bind(this);
        this.handledestination = this.handledestination.bind(this);
        this.handleflightDate = this.handleflightDate.bind(this);
        this.handlebookingDate = this.handlebookingDate.bind(this);
    }

    saveBooking = e => {
        e.preventDefault();
        let booking = {
            id:this.state.id,
            flightNumber:this.state.flightNumber,
            origin:this.state.origin,
            destination:this.state.destination,
            flightDate:this.state.flightDate,
            bookingDate:this.state.bookingDate
        };
        console.log('booking =>' + JSON.stringify(booking));

        BookingService.addBooking(booking).then(res => {
            this.props.history.push('/bookings');
        });
    }

    handleid = event => {
        this.setState({ id: event.target.value });
      }
    
    
      handleflightNumber = event => {
        this.setState({ flightNumber: event.target.value });
      }
    
      handleorigin = event => {
        this.setState({ origin: event.target.value });
      }
    
      handledestination = event => {
        this.setState({ destination: event.target.value });
      }
    
      handleflightDate = event => {
        this.setState({ flightDate: event.target.value });
    
      }

      handlebookingDate = event => {
        this.setState({ bookingDate: event.target.value });
    
      }

      cancel() {
        this.props.history.push('/addBookings');
      }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Booking Details </h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Flight Id</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Flight id"
                                            onChange={this.handleid}  
                                            value={this.state.id}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Flight Number</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Flight Number" 
                                            onChange={this.handleflightNumber} 
                                            value={this.state.flightNumber}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Origin</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Origin"
                                            onChange={this.handleorigin} 
                                            value={this.state.origin} />
                                    </div>

                                    <div className="form-group">
                                        <label>Destination</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Destination"
                                            onChange={this.handledestination}
                                            value={this.state.destination}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Flight Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            onChange={this.handleflightDate}
                                            value={this.state.flightDate}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Booking Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            onChange={this.handlebookingDate}
                                            value={this.state.bookingDate}  />
                                    </div>

                                    <a href="/bookings" className="btn btn-dark" onClick={this.saveBooking} style={{marginTop: "10px"}}>Book Ticket</a>
                                    <button className="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px" }} >Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBooking;