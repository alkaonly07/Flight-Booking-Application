import axios from 'axios'

const FLIGHT_BASE_REST_API_URL = 'http://localhost:8089/search/';
const FLIGHT_ADD_REST_API_URL = "http://localhost:8089/search/";
const FLIGHT_DELETE_REST_API_URL = 'http://localhost:8089/search/delete/';
const FLIGHT_UPDATE_REST_API_URL = 'http://localhost:8089/search/update/';

class FlightService {

    getAllFlights(){
        return axios.get(FLIGHT_BASE_REST_API_URL)
    }

    createFlight(flight){
        return axios.post(FLIGHT_ADD_REST_API_URL, flight)
    }

    getFlightById(flightId){
        return axios.get(FLIGHT_BASE_REST_API_URL + flightId);
    }

    updateFlight(flightId , flight){
        return axios.put(FLIGHT_UPDATE_REST_API_URL + flightId, flight);
    }

    deleteFlight(flightId){
        return axios.delete(FLIGHT_DELETE_REST_API_URL +  flightId);
    }
}

export default new FlightService();