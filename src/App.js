import React, { Component } from 'react';
import { array, sortedArray, searchLinear, searchBinary } from './Components/search'
import './App.css';

class App extends Component {
  state = {
    binaryResult: '',
    linearResult: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let { value } = event.target;
    console.log(value);
    let linearResult = searchLinear(array, Number(value.value));
    let binaryResult = searchBinary(sortedArray, Number(value.value));
    this.setState({ binaryResult, linearResult })
    
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="value" placeholder="linear search" required></input>
          <button type="submit">Search</button>
        </form>
        <div>
          <p>Linear search: {this.state.linearResult}</p>
          <p>Binary search: {this.state.binaryResult}</p>
        </div>
      </div>
    );
  };
}

export default App;
