import React, { Component } from 'react';
import logo from './logo.svg';
import Saludo from "./components/Saludo/saludo";
import './App.css';


class App extends Component{

  constructor(){
    super();
    this.state = {
      nombre: "ORT Belgrano"
    }
  }


  render(){
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Este es mi estado nombre: {this.state.nombre}</p>

        <Saludo name={this.state.nombre} />

        <button onClick={() => { this.alerta() }}> Clickeame </button>
      </div>
      
    )
  }

  alerta(){
    const nuevo_nombre = prompt("Cual es tu nombre?");

    this.setState({nombre: nuevo_nombre})

  }

}

export default App;