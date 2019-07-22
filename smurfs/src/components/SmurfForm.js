import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';


class SmurfForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    newSmurf = (e) => {
        e.preventDefault()

        const { name, age, height } = this.state
        
        this.props.addSmurf({name, age, height});

        this.setState({
           name: '',
            age: '',
            height: '',
        });
    };

    render() {
        return (
            <div>
                <form >
                    <input type="text" placeholder='Smurf Name' value={this.state.name} onChange={this.handleChange}/><br/>
                    <input type="text" placeholder='Smurf Age' value={this.state.age} onChange={this.handleChange}/><br/>
                    <input type="text" placeholder='Smurf Height' value={this.state.height} onChange={this.handleChange}/><br/>
                    <button onClick={() => this.newSmurf()} type='button'>Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("addSmurfFormState", state)
    return{
       errorMessage: state.errorMessage,
       addSmurf: state.addSmurf
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)