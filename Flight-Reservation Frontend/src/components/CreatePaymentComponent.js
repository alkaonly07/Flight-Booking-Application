import React, { Component } from "react";
import PaymentService from "../services/PaymentService";

import { ExternalLink } from 'react-external-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faRupee, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

class CreatePaymentComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        orderDate:'',
        transactionMode:'',
        seat:'',
        totalCost:'',
        date:""
    }
    
    this.changeOrderDateHandler=this.changeOrderDateHandler.bind(this);
    this.changeTransactionModeHandler=this.changeTransactionModeHandler.bind(this);
    this.changeSeatHandler=this.changeSeatHandler.bind(this);
   this.changeTotalCostHandler=this.changeTotalCostHandler.bind(this);
    this.savePayment=this.savePayment.bind(this);
  }

  componentDidMount() {
    this.getDate();
  }
  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  savePayment=(e)=> {
    e.preventDefault();
    let payment={orderDate:this.state.orderDate, transactionMode: this.state.transactionMode,
    seat:this.state.seat, totalCost:this.state.totalCost};
    console.log('payment =>' + JSON.stringify(payment));

    PaymentService.createPayment(payment).then(res =>{
      this.props.history.push('/do-payment');

    });
  }
  changeOrderDateHandler=(event)=>{
    this.setState({orderDate: event.target.value});
  }
  changeTransactionModeHandler=(event)=>{
    this.setState({transactionMode: event.target.value});
  }
  changeSeatHandler=(event)=>{
    this.setState({seat: event.target.value});
  }
  changeTotalCostHandler=(event)=>{
    this.setState({totalCost: event.target.value});
  }
  cancel(){
    this.props.history.push('/payments');
  }
  
  
  
  render() {
    const { date } = this.state;
    return (
      
      
    <div>
        <div className="container" >
            <div className="row">
                <div className="card col-nd-6 ofset-nd-3 offset-nd-3" style={{width: '45rem'}} >
                
                    <h3 className="text-center">Add Payment Details</h3>
                    
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label><strong> Payment Date </strong>: {date} </label>
                            </div>

                            <div className="form-group">
                                <label > Transaction Mode : </label>
                                
                                <select 
                        placeholder="Transaction Mode" name="transactionMode" className="form-select "
                        
                         value={this.state.transactionMode} onChange={this.changeTransactionModeHandler} >
                          <option selected>Choose...</option>
                            <option>Paytm</option>
                            <option>Net Banking</option>
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            
                            
                            </select>
                            
                         
                            </div>

                            {/* <div className="form-group">
                                <label> Number of Seat : </label>
                         <input type="number" min="1" step="1" placeholder="Number of Seat" name="seat" className="form-control" 
                         value={this.state.seat} onChange={this.changeSeatHandler}/>
                            </div> */}

                            <div className="form-group">
                                <label> Total Cost : 9980</label>
                            </div>

                        {/* <button type="submit" className="btn btn-success" onClick={this.savePayment} > Submit</button>*/}
                      <ExternalLink href="http://localhost:8086/" className='btn btn-success' style={{marginLeft:"10px"}}>
                         <span  >let's do the payment<FontAwesomeIcon icon={faIndianRupeeSign} /></span>
                      </ExternalLink>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                        

                        </form>
                    </div>

                </div>
                </div>
        
        </div>
    </div>
    )
  }
}

export default CreatePaymentComponent;