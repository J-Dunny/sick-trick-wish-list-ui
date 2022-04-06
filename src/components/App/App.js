import React, { Component } from 'react';
import { fetchTricks } from '../../apiCalls';
import AllTricks from '../AllTricks/AllTricks';
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




  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <AllTricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;