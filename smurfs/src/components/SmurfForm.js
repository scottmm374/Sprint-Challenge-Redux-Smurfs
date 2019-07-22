import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';


class SmurfForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0,
            height: 0,
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

        const {smurf} = this.state
        const smurfs = {
            smurf,
        }
        this.props.addSmurf(smurfs)

        this.setState({
            smurfs: ''
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