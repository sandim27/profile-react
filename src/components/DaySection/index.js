import React from 'react';
import { Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

const DaySection = (props) => {
  return (
    <section className="personal-days">
      <Col xs={12} md={6} className="col">
        <FormGroup controlId="formValidationNull" validationState={null}>
          <ControlLabel>{props.name}</ControlLabel>
          <div className="block-time">
            <Checkbox id={props.chName} checked={props.ch} onChange={props.getStateCheckbox}>
              <span className="under-text"/>
              <span className="check-dump"/>
            </Checkbox>
            <FormControl componentClass="select" className="select-days" placeholder="Time" disabled={!props.ch}>
              <option value="1">10:00 Am</option>
              <option value="2">11:00 Am</option>
              <option value="1">12:00 Am</option>
            </FormControl>
            &mdash;
            <FormControl componentClass="select" className="select-days" placeholder="Time" disabled={!props.ch}>
              <option value="1">10:00 Am</option>
              <option value="2">11:00 Am</option>
              <option value="1">12:00 Am</option>
            </FormControl>
          </div>
        </FormGroup>
      </Col>
      <Col xs={12} md={6} className="col">
        <ControlLabel>Address</ControlLabel>
        <FormControl componentClass="select" placeholder="On location" disabled={!props.ch}>
          <option value="Address1">Address1</option>
          <option value="Address2">Address2</option>
          <option value="Address3">Address3</option>
          <option value="Address4">Address4</option>
        </FormControl>
      </Col>
    </section>
  );
}

export default DaySection;
