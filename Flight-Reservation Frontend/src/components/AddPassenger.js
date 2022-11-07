import React, { Component } from 'react'
import PassengerService from '../services/PassengerService';

class AddPassenger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            nooftickets: ''
        }
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeNoofticketsHandler = this.changeNoofticketsHandler.bind(this);
        this.savePassenger = this.savePassenger.bind(this);
    }

    // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         PassengerService.getPassengerById(this.state.id).then( (res) =>{
    //             let passenger = res.data;
    //             this.setState({username: passenger.username,
    //                 firstName: passenger.firstName,
    //                 lastName: passenger.lastName,
    //                 email : passenger.email,
    //                 gender : passenger.gender,
    //                 nooftickets : passenger.nooftickets
    //             });
    //         });
    //     }        
    // }
    savePassenger = (e) => {
        e.preventDefault();
        let passenger = {id: this.state.id,username: this.state.username,firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, gender: this.state.gender, nooftickets: this.state.nooftickets};
        console.log('passenger => ' + JSON.stringify(passenger));
        PassengerService.addPassenger(passenger).then(res =>{
            this.props.history.push('/getAllPassengers');
        })
    }

        // // step 5
        // if(this.state.id === '_add'){
        //     PassengerService.addPassenger(passenger).then(res =>{
        //         this.props.history.push('/getAllPassengers');
        //     });
        // }else{
        //     PassengerService.updatePassenger(passenger, this.state.id).then( res => {
        //         this.props.history.push('/updatePassenger');
        //     });
        // }
    

    changeIdHandler= event => {
        this.setState({id: event.target.value});
    }

    changeUsernameHandler= event => {
        this.setState({username: event.target.value});
    }
    
    changeFirstNameHandler= event => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= event => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= event => {
        this.setState({email: event.target.value});
    }

    changeGenderHandler= event => {
        this.setState({gender: event.target.value});
    }

    changeNoofticketsHandler= event => {
        this.setState({nooftickets: event.target.value});
    }

    cancel(){
        this.props.history.push('/addPassenger');
    }

    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Passenger</h3>
    //     }else{
    //         return <h3 className="text-center">Update Passenger</h3>
    //     }
    // }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {/* {
                                    this.getTitle()
                                } */}
                                <h3 className="text-center">Add Passenger</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className='form-group'>
                                        <label>Passenger ID :</label>
                                        <input 
                                            type="text" placeholder='Passenger Id' className='form-control' 
                                            value={this.state.id} onChange={this.changeIdHandler}/>
                                            
                                    </div>
                                    <div className = "form-group">
                                            <label> Username: </label>
                                            <input type="text" placeholder="Username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input type="text" placeholder="First Name" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input type="text" placeholder="Last Name" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input type="email" placeholder="Email Address" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <select type="text" placeholder="Gender" className="form-select "
                                                value={this.state.gender} onChange={this.changeGenderHandler}>
                                                    <option selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            
                            
                            
                            </select>
                                        </div>
                                    {/*    <div className = "form-group">
                                            <label> No. of Tickets: </label>
                                            <input type="text" placeholder="No. of Tickets" className="form-control" 
                                                value={this.state.nooftickets} onChange={this.changeNoofticketsHandler}/>
                            </div>*/}

                                        <a href="/getAllPassengers" className="btn btn-dark" onClick={this.saveBooking}>Save</a>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddPassenger