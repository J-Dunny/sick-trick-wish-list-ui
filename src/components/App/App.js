import React, { Component } from 'react';
import { fetchTricks } from '../../apiCalls';
import AllTricks from '../AllTricks/AllTricks';
import Form from '../Form/Form';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount(){
    fetchTricks()
    .then(data => {
      // console.log(data)
      return this.setState({
        tricks: data
      })
    })
  }

  addTrick = (newTrick) => {
    // e.preventDefault()
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }




  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <AllTricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;