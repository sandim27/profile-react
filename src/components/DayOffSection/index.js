import React from 'react';
import { Col, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

const DayOffSection = (props) => {
  return (
    <section className="personal-days off-day">
      <Col xs={12} md={6} className="col">
        <FormGroup controlId="formValidationNull" validationState={null}>
          <ControlLabel>{props.name}</ControlLabel>
          <div className="block-time">
            <Checkbox >
              <span className="under-text"/>
              <span className="check-dump"/>
            </Checkbox>
            <div className="off-info">Off day</div>
          </div>
        </FormGroup>
      </Col>
    </section>
  );
}

export default DayOffSection;
