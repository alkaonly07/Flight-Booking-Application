import axios from "axios";

const GETORDER_API_BASE_URL ="http://localhost:8084/api/bookingdetails/allorders";
const DOORDER_API_BASE_URL="http://localhost:8084/api/bookingdetails/addOrders";
const DELETEORDER_API_BASE_URL ="http://localhost:8084/api/bookingdetails/orders";

class PaymentService {

    getOrders(){
        return axios.get(GETORDER_API_BASE_URL);
    }
    createPayment(payment){
        return axios.post(DOORDER_API_BASE_URL , payment);
    }
    deletePayment(bookingOrderId){
        return axios.delete(DELETEORDER_API_BASE_URL+ '/' + bookingOrderId);
    }
}
export default new PaymentService()