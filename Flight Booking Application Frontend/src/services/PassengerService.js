import axios from 'axios';

const PASSENGER_API_GET_ALL_PASSENGERS_URL = "http://localhost:9093/api/v2/allPassengers";
const PASSENGER_API_GET_PASSENGER_URL = "http://localhost:9093/api/v2/getPassenger/";
const PASSENGER_API_ADD_PASSENGERS_URL = "http://localhost:9093/api/v2/addPassenger";
const PASSENGER_API_UPDATE_PASSENGERS_URL = "http://localhost:9093/api/v2/updatePassenger/";
const PASSENGER_API_DELETE_PASSENGERS_URL = "http://localhost:9093/api/v2/deletePassenger";


class PassengerService {

    getPassengers(){
        return axios.get(PASSENGER_API_GET_ALL_PASSENGERS_URL);

    }

    addPassenger(passenger){
        return axios.post(PASSENGER_API_GET_ALL_PASSENGERS_URL, passenger);
    }

    getPassengerById(id){
        return axios.get(PASSENGER_API_GET_PASSENGER_URL + '/' + id);
    }

    updatePassenger(passenger, id){
        return axios.put(PASSENGER_API_UPDATE_PASSENGERS_URL + '/' + id, passenger);
    }

    deletePassenger(id){
        return axios.delete(PASSENGER_API_DELETE_PASSENGERS_URL + '/' + id);
    }
}

export default new PassengerService()