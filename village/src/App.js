import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs') 

      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })

      .catch(err => {
        console.log(err);
      });
  }
  sLUpdate = smurfData => {
    this.setState({
      smurfs: smurfData
    });
  }

  render() {
    return (
      <div className="App">
        <NavLink to='/smurf-form'>Smurf Form</NavLink><br/>
        <NavLink exact to='/'>Smurf's</NavLink>
        <Route
        path='/smurf-form'
        render = { props =>
        <SmurfForm {...props} smurfs={this.state.smurfs} sLUpdate={this.sLUpdate} />} />
        <Route
        exact path='/'
        render = { props =>
        <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
