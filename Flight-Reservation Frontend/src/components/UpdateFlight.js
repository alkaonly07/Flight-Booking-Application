import React, { Component } from 'react';
import FlightService from '../services/FlightService';

class UpdateFlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            code:'',
            from:'',
            to:'',
            price:'',
            arrivalTime:'',
            departTime:'',
            depart:''
        }

        this.updateBooking = this.updateBooking.bind(this);
        this.handleid = this.handleid.bind(this);
        this.handlecode = this.handlecode.bind(this);
        this.handlefrom = this.handlefrom.bind(this);
        this.handleto = this.handleto.bind(this);
        this.handleprice = this.handleprice.bind(this);
        this.handlearrivalTime = this.handlearrivalTime.bind(this);
        this.handledepartTime = this.handledepartTime.bind(this);
        this.handledepart = this.handledepart.bind(this);

    }

    componentDidMount() {
        FlightService.getFlightById(this.state.id).then ( (res) => {
            let flight=res.data;
            this.setState({
                id:flight.id,
                code:flight.code,
                from:flight.from,
                to:flight.to,
                price:flight.price,
                arrivalTime:flight.arrivalTime,
                departTime:flight.departTime,
                depart:flight.depart

            });
        });
    }

    updateFlight = e => {
        e.preventDefault();
        let flight = {
            id:this.state.id,
            code:this.state.code,
            from:this.state.from,
            to:this.state.to,
            price:this.state.price,
            arrivalTime:this.state.arrivalTime,
            departTime:this.state.departTime,
            depart:this.state.depart


        };
        console.log('flight =>' + JSON.stringify(flight));

        FlightService.updateFlight(flight,flight.id).then( res => {
            this.props.history.push('/flights');
        });
    }

    handleid = event => {
        this.setState({ id: event.target.value });
      }
    
    
      handlecode = event => {
        this.setState({ code: event.target.value });
      }
    
      handlefrom = event => {
        this.setState({ from: event.target.value });
      }
    
      handleto = event => {
        this.setState({ to: event.target.value });
      }
    
      handleprice = event => {
        this.setState({ price: event.target.value });
    
      }

      handlearrivalTime = event => {
        this.setState({ arrivalTime: event.target.value });
    
      }

      handledepartTime = event => {
        this.setState({ departTime: event.target.value });
    
      }

      handledepart = event => {
        this.setState({ depart: event.target.value });
    
      }

      cancel() {
        this.props.history.push('/updateFlight');
      }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Flight Details </h3>
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
                                            onChange={this.handlecode} 
                                            value={this.state.code}/>
                                    </div>

                                    <div className="form-group">
                                        <label>from</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter from"
                                            onChange={this.handlefrom} 
                                            value={this.state.from} />
                                    </div>

                                    <div className="form-group">
                                        <label>to</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter to"
                                            onChange={this.handleto}
                                            value={this.state.to}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Price</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            onChange={this.handleprice}
                                            value={this.state.price}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Arrival Time</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            onChange={this.handlearrivalTime}
                                            value={this.state.arrivalTime}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Departure Time</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            onChange={this.handledepartTime}
                                            value={this.state.departTime}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Depart Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            onChange={this.handledepart}
                                            value={this.state.depart}  />
                                    </div>

                                    <a href="/flights" className="btn btn-dark" onClick={this.updateBooking} style={{marginTop: "10px"}}>Update</a>
                                    <button className="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",marginTop: "10px"}}>Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateFlight;