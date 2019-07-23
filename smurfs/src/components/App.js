import React, { Component } from 'react';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import{ getSmurf} from '../actions/index';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    return (
      <div className="App">
        <SmurfForm /> 
        <Smurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
    smurfs: state.smurfs,
    getSmurf: state.getSmurf,
  }
}

export default connect(mapStateToProps, { getSmurf })(App)


