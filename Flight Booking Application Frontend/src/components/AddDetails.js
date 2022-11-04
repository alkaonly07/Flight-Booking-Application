import React, { Component } from 'react'
//import PassengerService from '../services/PassengerService';

class AddDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
           // id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            gender: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
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
        let passenger = {username: this.state.username,firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, gender: this.state.gender, nooftickets: this.state.nooftickets};
        console.log('passenger => ' + JSON.stringify(passenger));

        // step 5
        // if(this.state.id === '_add'){
        //     PassengerService.addPassenger(passenger).then(res =>{
        //         this.props.history.push('/getAllPassengers');
        //     });
        // }else{
        //     PassengerService.updatePassenger(passenger, this.state.id).then( res => {
        //         this.props.history.push('/updatePassenger');
        //     });
        // }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
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
                                <h3 className="text-center">Add Your Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>

                                        {/* <button className="btn btn-success" onClick={this.savePassenger}>Save</button> */}
                                        <a href="/add-payment" className="btn btn-warning" ><strong>Pay</strong></a>
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

export default AddDetails