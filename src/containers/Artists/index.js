import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PersonalSection from '../../components/PersonalSection';
import DaySection from '../../components/DaySection';
import DayOffSection from '../../components/DayOffSection';
import './styles/index.css';

class Profile extends Component {
  state = {
    firstVal: '',
    firstValid: null,
    firstError: false,
    lastVal: '',
    lastValid: null,
    lastError: false,
    emailVal: '',
    emailValid: null,
    emailError: false,
    emailSent: false,
    ch1: true,
    ch3: false,
    pasiveButton: true,
  }

  getFirstName = (event) => {
    this.setState({firstVal: event.target.value})
  }

  getLastName = (event) => {
    this.setState({lastVal: event.target.value})
  };

  getEmail = (event) => {
    this.setState({emailVal: event.target.value})
  }

  checkValidEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailVal) && this.state.emailVal !== '' ){
      this.setState({emailValid: null, emailError: false, emailSent: true});
    }else{
      this.setState({emailValid: 'error', emailError: true, emailSent: false});
    }
  }

  getStateCheckbox = (event) => {
    let checked = event.target.checked;
    this.setState({[event.target.id]:checked});
  }

  saveProfile = (event) => {
    event.preventDefault();
    if (this.state.firstVal === '') {
      this.setState({firstValid: 'error', firstError: true});
    } else {
      this.setState({firstValid: null, firstError: false});
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailVal) && this.state.emailVal !== '' ){
      this.setState({emailValid: null, emailError: false});
    }else{
      this.setState({emailValid: 'error', emailError: true});
    }

    if (this.state.lastVal === '') {
      this.setState({lastValid: 'error', lastError: true});
    } else {
      this.setState({lastValid: null, lastError: false});
    }

    this.setState({pasiveButton: false});

  }

  render() {
    return (
      <div className="wrapper form">
        <h1>Profile</h1>
        <Button bsStyle="primary" bsSize="small"> &larr; Back</Button>
        <form className="form_top" onSubmit={this.saveProfile}>
          <PersonalSection {...this.state} getFirstName={this.getFirstName} getLastName={this.getLastName} getEmail={this.getEmail} checkValidEmail={this.checkValidEmail}/>
          <DaySection name={'Sunday'} ch={this.state.ch1} chName={'ch1'} getStateCheckbox={this.getStateCheckbox}/>
          <DayOffSection name={'Monday'}/>
          <DaySection name={'Tuesday'} ch={this.state.ch3} chName={'ch3'} getStateCheckbox={this.getStateCheckbox}/>
          <div className="button-save">
            <Button bsStyle="primary" bsSize="small" type='submit' >Save</Button>
            <div className={this.state.firstError || this.state.lastError || this.state.emailError || this.state.pasiveButton ? 'hidden': 'success-saved' }>Success !</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
