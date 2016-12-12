import React from 'react';
import { Col, Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

const PersonalSection = (props) => {

  return (
    <section className="personal-info">
      <Col xs={12} md={8} className="col col-inputs">
        <h2>Add new artist</h2>
        <FormGroup controlId="formValidationNull"  validationState={props.firstValid}>
          <h3>Name</h3>
          <FormControl type="text" placeholder="First" onChange={props.getFirstName}/>
          <HelpBlock className={!props.firstError ? 'hidden' : null}>Please, enter a firstname</HelpBlock>
        </FormGroup>
        <FormGroup controlId="formValidationNull" className='block-lastname' validationState={props.lastValid}>
          <FormControl type="text" placeholder="Last" onChange={props.getLastName}/>
          <HelpBlock className={!props.lastError ? 'hidden' : null}>Please, enter a lastname</HelpBlock>
        </FormGroup>
        <h3>E-mail &amp; phone</h3>
        <h4>Why do we need it ?</h4>
        <p>So we may share latest schedule updates witch your Artists.
          Each artist will see only his or her schedule.
          Neither phone or e-mail of your Artists will be visible to public.
        </p>
        <FormGroup controlId="formValidationNull" validationState={props.emailValid}>
          <div className="group-inputs">
            <div className="buttons-invitation">
              <FormControl type="text" placeholder="E-mail" onChange={props.getEmail}/>
              <HelpBlock className={!props.emailError ? 'hidden' : null}>Please, enter a valid E-mail</HelpBlock>
              <div className="buttons-block">
                <Button bsStyle="primary" bsSize="small" onClick={props.checkValidEmail}> Resend invitation</Button>
                <HelpBlock className={props.emailSent ? 'success' : 'hidden' }>Invitation sent</HelpBlock>
              </div>
            </div>
          </div>
        </FormGroup>
        <FormGroup controlId="formValidationNull" validationState={null}>
          <div className="group-inputs">
            <FormControl type="phone" placeholder="Phone"/>
          </div>
        </FormGroup>
      </Col>
      <Col xs={6} md={4} className="col col-photo">
        <div className="photo-block">
          <h3>Artists photo</h3>
          <div className="photo-area">
            <label data-for="photo-file"><input type="file" id='photo-file'/></label>
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
  );
}

export default PersonalSection;
