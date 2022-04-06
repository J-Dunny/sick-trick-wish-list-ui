import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: Date.now(),
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    changeHandler = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }


    render(){
        console.log("newtrick",this.state)

        return(
            <form onSubmit={(e) => this.props.addTrick(e, this.state)}>
                <select name="stance" placeholder='Stance' onChange={(e) => this.changeHandler(e)}>
                    <option value="regular">Regular</option>
                    <option value="switch">Switch</option>
                </select>
                <input name="name" placeholder='Name of Trick' onChange={(e) => this.changeHandler(e)}></input>
                <select name="obstacle" placeholder='Obstacle' onChange={(e) => this.changeHandler(e)}>
                    <option value="Flatground">Flatground</option>
                    <option value="Ledge">Ledge</option>
                    <option value="Rail">Rail</option>
                    <option value="Stairs">Stairs</option>
                    <option value="Pool">Pool</option>
                </select>
                <input name="tutorial" placeholder='Link to Tutorial' onChange={(e) => this.changeHandler(e)}>
                </input>
                <button>Send it!</button>
            </form>
        )
    }
}

export default Form