import axios from 'axios'

const BOOKING_LIST_API = "http://localhost:9092/api/booking/get";
const ADD_BOOKING_API = "http://localhost:9092/api/booking/add";
const UPDATE_BOOKING_API = "http://localhost:9092/api/booking/update";
const DELETE_BOOKING_API ="http://localhost:9092/api/booking/delete";

class BookingService{

    getBookingList(){
       return axios.get(BOOKING_LIST_API);
    }

    getBookingById(id){
        return axios.get(BOOKING_LIST_API + '/' + id);
    }

    addBooking(booking){
        return axios.post(ADD_BOOKING_API,booking);
    }

    updateBooking(booking,id){
        return axios.put(UPDATE_BOOKING_API+ '/' +id ,booking);
    }

    deleteBooking(id){
        return axios.delete(DELETE_BOOKING_API+ '/' +id);
    }
}

export default new BookingService()