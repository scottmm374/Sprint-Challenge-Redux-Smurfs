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
        })
    }

    newSmurf = (e) => {
        e.preventDefault()

        const { name, age, height } = this.state
        
        this.props.addSmurf(name, age, height)

        this.setState({
           name: '',
            age: '',
            height: '',
        })
    }

    render() {
        const { smurf } = this.state
        return (
            <div>
                <form onSubmit={this.newSmurf}>
                    <input type="text" placeholder='Smurf Name' value={smurf.name} onChange={this.handleChange}/><br/>
                    <input type="text" placeholder='Smurf Age' value={smurf.age} onChange={this.handleChange}/><br/>
                    <input type="text" placeholder='Smurf Height' value={smurf.height} onChange={this.handleChange}/><br/>
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("addSmurfFormState", state)
    return{
        Smurfs: state.smurfs
    }
}

const mapDispatchToProps = {
    addSmurf: addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(addSmurf)