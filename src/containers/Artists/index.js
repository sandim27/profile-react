import React, { Component } from 'react';
import { Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox } from 'react-bootstrap';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper form">
        <h1>Profile</h1>
        <Button bsStyle="primary" bsSize="small"> &larr; Back</Button>
        <form className="form_top">
          <section className="personal-info">
            <Col xs={12} md={8} className="col col-inputs">
              <h2>Add new artist</h2>
              <FormGroup controlId="formValidationNull" validationState={null}>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="First"/>
                <FormControl type="text" placeholder="Last"/>
              </FormGroup>
              <FormGroup controlId="formValidationNull" validationState={null}>
                <ControlLabel>E-mail &amp; phone</ControlLabel>
                <h4>Why do we need it ?</h4>
                <p>So we may share latest schedule updates witch your Artists.
                  Each artist will see only his or her schedule.
                  Neither phone or e-mail of your Artists will be visible to public.
                </p>
                <div className="group-inputs">
                  <div className="buttons-invitation">
                    <FormControl type="email" placeholder="E-mail"/>
                    <div className="buttons-block">
                      <Button bsStyle="primary" bsSize="small"> Resend invitation</Button>
                      <HelpBlock>Invitation sent</HelpBlock>
                    </div>
                  </div>
                  <FormControl type="phone" placeholder="Phone"/>
                </div>
              </FormGroup>
            </Col>
            <Col xs={6} md={4} className="col col-photo">
              <div className="photo-block">
                <h3>Artists photo</h3>
                <div className="photo-area">
                  <div className="under-text">
                    <p>Drop your image here</p>
                    <p>JPG and Png,<br/>
                      up to 10 Megabytes,<br/>
                      Portrait oriented <br/>
                      more than 600x800 pixels.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </section>
          <section className="personal-days">
            <Col xs={12} md={6} className="col">
              <FormGroup controlId="formValidationNull" validationState={null}>
                <ControlLabel>Sunday</ControlLabel>
                <div className="block-time">
                  <Checkbox>
                    <span className="under-text"/>
                    <span className="check-dump"/>
                  </Checkbox>
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                  &mdash;
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                </div>
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="col">
              <ControlLabel>Address</ControlLabel>
              <FormControl componentClass="select" placeholder="On location">
                <option value="1">1</option>
                <option value="2">...</option>
              </FormControl>
            </Col>
          </section>
          <section className="personal-days">
            <Col xs={12} md={6} className="col">
              <FormGroup controlId="formValidationNull" validationState={null}>
                <ControlLabel>Monday</ControlLabel>
                <div className="block-time">
                  <Checkbox>
                    <span className="under-text"/>
                    <span className="check-dump"/>
                  </Checkbox>
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                  &mdash;
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                </div>
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="col">
              <ControlLabel>Address</ControlLabel>
              <FormControl componentClass="select" placeholder="On location">
                <option value="1">1</option>
                <option value="2">...</option>
              </FormControl>
            </Col>
          </section>
          <section className="personal-days">
            <Col xs={12} md={6} className="col">
              <FormGroup controlId="formValidationNull" validationState={null}>
                <ControlLabel>Tuesday</ControlLabel>
                <div className="block-time">
                  <Checkbox>
                    <span className="under-text"/>
                    <span className="check-dump"/>
                  </Checkbox>
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                  &mdash;
                  <FormControl componentClass="select" className="select-days" placeholder="Time">
                    <option value="1">10:00 Am</option>
                    <option value="2">11:00 Am</option>
                  </FormControl>
                </div>
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="col">
              <ControlLabel>Address</ControlLabel>
              <FormControl componentClass="select" placeholder="On location">
                <option value="1">1</option>
                <option value="2">...</option>
              </FormControl>
            </Col>
          </section>
          <div className="button-save">
            <Button bsStyle="primary" bsSize="small" >Save</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
