import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    changeHandler = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    submitNewTrick = e => {
        e.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        })
    }

    render(){
        // console.log("newtrick",this.state)

        return(
            <form onSubmit={(e) => this.submitNewTrick(e)}>
                <select name="stance" value={this.state.stance} onChange={(e) => this.changeHandler(e)}>
                    <option value='' defaultValue>Choose Stance</option>
                    <option value='Regular'>Regular</option>
                    <option value='Switch'>Switch</option>
                </select>
                <input name="name" placeholder='Name of Trick' value={this.state.name} onChange={(e)  => this.changeHandler(e)}></input>
                <select name="obstacle" value={this.state.obstacle} onChange={(e) => this.changeHandler(e)}>
                <option value='' defaultValue>Choose Obstacle</option>
                    <option value='Flatground'>Flatground</option>
                    <option value='Ledge'>Ledge</option>
                    <option value='Rail'>Rail</option>
                    <option value='Stairs'>Stairs</option>
                    <option value='Pool'>Pool</option>
                </select>
                <input name="tutorial" placeholder='Link to Tutorial' value={this.state.tutorial} onChange={(e) => this.changeHandler(e)}>
                </input>
                <button>Send it!</button>
            </form>
        )
    }
}

export default Form