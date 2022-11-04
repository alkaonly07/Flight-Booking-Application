import React, {Component} from 'react';
import PaymentService from '../services/PaymentService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";




class ListPaymentDetail extends Component {
constructor(props) {
    super(props);

    this.state = {
        payments :[]
    }
    this.addOrders=this.addOrders.bind(this);
    this.deletePayment=this.deletePayment.bind(this);
    
}
    deletePayment(bookingOrderId){
        PaymentService.deletePayment(bookingOrderId).then(res =>{
            this.setState({payments:this.state.payments.filter(payment =>payment.bookingOrderId !== bookingOrderId)});

        });

    }
    componentDidMount(){
        PaymentService.getOrders().then((res)=>{
            this.setState({payments : res.data});
        });
    }
    addOrders(){
        this.props.history.push('/add-payment');

    }
    render() {
        return (<div>
            

            <h2 className="text-center">Payment List</h2>
            <div className = "row">
                
            </div>
           
            <div className = "row">
                <table className = "table table-striped table-bordered"  >
                    <thead>
                        <tr>
                            <th>Payment Date </th>
                            <th>Transaction Mode </th>
                            <th>Number of Seat </th>
                            <th>Total Cost </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {
                            this.state.payments.map(
                                payment =>
                                <tr key={payment.bookingOrderId}>
                                    <td>{payment.orderDate}</td>
                                    <td>{payment.transactionMode}</td>
                                    <td>{payment.seat}</td>
                                    <td>{payment.totalCost}</td>
                                    <td>
                                        <button onClick={ () => this.deletePayment(payment.bookingOrderId)} ><FontAwesomeIcon icon={faTrash} /></button>
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



export default ListPaymentDetail;