import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars=()=> {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(this.state)
      this.setState({        
        cars: res.data
      })
    })
  }

  

  render() {
  
    let mapper = this.state.cars.map((car,i)=>{
      return <div key={i}>        
        {/* <p>id: {car.id}</p> */}
        <p>make: {car.make}</p>
        <p>model:{car.model}</p>
        <p>year:{car.year}</p>
        <p>color:{car.color}</p>
        <p>price:{car.price}</p>
        <p></p>
      </div>
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {/* {JSON.stringify(this.state.cars)} */}
        {mapper}
      </div>
    );
  }
}

export default App;
