import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Typeahead } from 'react-bootstrap-typeahead'; 
//import { connect } from 'react-redux';
import './SearchForm.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Carousel } from "react-bootstrap";

//import { findFlights } from './../../actions';

const airports = [
  'Bengaluru (BLR)',
  'Chennai (MAA)',
  'Delhi (DEL)',
  'Hyderabad (HYD)',
  'Kolkata (CCU)',
  'Lucknow (LKO)',
  'Mumbai (BOM)',
  'Patna (PAT)',
  'Pune (PNQ)',
  'Raipur (RPR)'
];

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

const ErrorLabel = (props) => {
  return (<label style={{color: 'red'}}>{props.message}</label>)
}

export const SearchForm = (props) => {
  let origin, destination;
  const [isReturn, setFlightType] = useState(false);
  const [status, setFormValid] = useState({ isValid: false });
  let invalidFields = {};
  //const isReturn = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const {flights} = props;
    invalidFields = {};
    const criteria = {
      origin: origin.state.text,
      destination: destination.state.text,
      departureDate: event.target.dateOfDep.value,
      numOfPassengers: event.target.numOfPassengers.value
    }

    if (event.target.flightType[1].checked ) {
      criteria.returnDate = event.target.dateOfReturn.value;
      if (!isDate(event.target.dateOfReturn.value)) {
        invalidFields.returnDate = true;
      }
    }

    if (!airports.includes(criteria.origin)) {
      invalidFields.origin = true;
    }
    if (!airports.includes(criteria.destination) || criteria.origin === criteria.destination) {
      invalidFields.destination = true;
    }
    if(!isDate(criteria.departureDate)) {
      invalidFields.departureDate = true;
    }
    if(!isDate(criteria.departureDate)) {
      invalidFields.departureDate = true;
    }
    if(Object.keys(invalidFields).length > 0) {
      setFormValid({isValid: false, ...invalidFields});
      return;
    }
    
    setFormValid({isValid: true});
    props.findFlights({flights, criteria});
  }

  return (
    <div  >
    <Card className='SearchForm' style={{height: '40rem' }}>
      <Card.Body>
      <Form className="search-form-container" onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Check
            inline
            checked={!isReturn}
            type="radio"
            label="One way"
            name="flightType"
            id="formHorizontalRadios1"
            onChange={(e)=>setFlightType(false)}
          />
          <Form.Check
            inline
            checked={isReturn}
            type="radio"
            label="Return"
            name="flightType"
            id="formHorizontalRadios2"
            onChange={(e)=>setFlightType(true)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formGridOrigin">
        <Form.Label>Origin</Form.Label>
          <Typeahead
            labelKey="origin"
            options={airports}
            placeholder="Enter Origin"
            ref={(ref) => origin = ref}
          />
          {status.origin && <ErrorLabel message="Please enter a valid airport"></ErrorLabel>}
        </Form.Group>

        <Form.Group controlId="formGridDestination">
        <Form.Label>Destination</Form.Label>
          <Typeahead
            labelKey="destination"
            options={airports}
            placeholder="Enter Destination"
            ref={(ref) => destination = ref}
          />
          {status.destination && <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>}
        </Form.Group>

        <Form.Group controlId="formGridDateOfDep">
          <Form.Label>Departure Date</Form.Label>
          <Form.Control type="date" name="dateOfDep" placeholder="yyyy-mm-dd" required />
          {status.departureDate && <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>}
        </Form.Group>

        {isReturn && <Form.Group controlId="formGridDateOfReturn">
          <Form.Label>Return Date</Form.Label>
          <Form.Control type="date" name="dateOfReturn"  placeholder="yyyy-mm-dd" required />
          {status.returnDate && <ErrorLabel message="Please enter a valid return date"></ErrorLabel>}
        </Form.Group>}

        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Number of Passengers</Form.Label>
          <Form.Control as="select" name="numOfPassengers" placeholder="Enter Number of Passengers">
            <option>Enter Number of Passengers</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <br></br>
        <Button variant="primary" size="lg" type="submit">
          Search
        </Button>
        </Form> 
      </Card.Body>
    </Card>

{/* <Card >
<Card.Body>
  <img style={{width: 700,height: 200}}
    src = "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?cs=srgb&dl=pexels-pixabay-62623.jpg&fm=jpg" />
</Card.Body>
</Card> */}
     </div>
  )
}

// const mapStateToProps = (state) => ({
//   flights: state.flights
// })

// const mapDispatchToProps = {
//   findFlights
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
export default SearchForm
