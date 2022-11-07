import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import OrderService from '../services/OrderService';

export default class AddOrder extends Component {
    constructor(props){
        super(props)
        this.state={
            orderId:'',
            orderDate:'',
            transactionMode:'',
            quantity:'',
            totalCost:''
        }

        this.changeOrderIdHandler=this.changeOrderIdHandler.bind(this);
        this.changeOrderDateHandler=this.changeOrderDateHandler.bind(this);
        this.changeTransactionModeHandler=this.changeTransactionModeHandler.bind(this);
         this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
         this.changeTotalCostHandler=this.changeTotalCostHandler.bind(this);
    } 

    changeOrderIdHandler=(e) => {
        this.setState({orderId: e.target.value});
    }

    changeOrderDateHandler=(e) => {
        this.setState({orderdate: e.target.value});
    }

    changeTransactionModeHandler=(e) => {
        this.setState({transactionMode: e.target.value});
    }

    changeQuantityHandler=(e) => {
        this.setState({quantity: e.target.value});
    }

    changeTotalCostHandler=(e) => {
        this.setState({totalCost: e.target.value});
    }

    saveOrder=(e) => {
        e.preventDefault();
        let order = {orderId: this.state.orderId, orderDate: this.state.orderDate, transactionMode: this.state.transactionMode,quantity:this.state.quantity,totalCost:this.state.totalCost};
        console.log('order =>' + JSON.stringify(order));

        OrderService.addOrder(order).then(res =>{
            this.props.history.push('/orders');
        })
    }

    cancel(){
        this.props.history.push('/orders');
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Order</h3>
                    <div className='card-body'>
                        <form className="formClass">
                            <div className='form-group'>
                                <label>Order Date :</label>
                                <input 
                                    type='date'
                                    placeholder='Order Date' 
                                    name='orderDate'
                                    className='form-control' 
                                    value={this.state.orderDate}
                                    onChange={this.changeOrderDateHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>transactionMode :</label>
                                <input
                                    type='text' 
                                    placeholder='transactionMode' 
                                    name='transactionMode'
                                    className='form-control' 
                                    value={this.state.transactionMode}
                                    onChange={this.changeTransactionModeHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>Quantity :</label>
                                <input
                                    type='text' 
                                    placeholder='quantity' 
                                    name='quantity'
                                    className='form-control' 
                                    value={this.state.quantity}
                                    onChange={this.changeQuantityHandler}/>
                            </div>

                            <div className='form-group'>
                                <label> totalCost:</label>
                                <input
                                    type='text' 
                                    placeholder='totalCost' 
                                    name='totalCost'
                                    className='form-control' 
                                    value={this.state.totalCost}
                                    onChange={this.changeTotalCostHandler}/>
                            </div>
                            <Link to='/Order'>
                            <button className='btn btn-success' onClick={this.saveOrder.bind(this)}>Save</button>
                            <button className='btn btn-danger' onClick={() => navigate("/home")} style={{marginLeft:"10px"}}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}