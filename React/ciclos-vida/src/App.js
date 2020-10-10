import React, { Component } from 'react';
import './App.css';


let contador = 0;
class App extends Component{
  constructor(){
    super();
    contador++;
    console.log("Paso 1: constructor", contador)
    this.state ={
      nombre: "Equipo NT2"
    }
  }

  render(){
    console.log("Paso 2 o 5: render (MOUNT) (UPDATE)")
    return (
      <div>
        <h1>Hola {this.state.nombre}</h1>
        <button onClick={ () => {
          // Aqui estoy actualizando mi estado.
          this.setState({
            nombre: "Thiago"
          })
        }}> Cambiar estado </button>
      </div>
    )
  }

  componentDidMount(){
    console.log("Paso 3: componentDidmount");
    
  }


  /** 
   * Metodos del ciclo de vida UPDATE
  */
  shouldComponentUpdate(nextProps, nextState){
    console.log("Paso 4: se ejcuta antes del render del update", nextState)
    return (nextState.nombre !== this.state.nombre)
  }

  componentDidUpdate(props, state){
      console.log("Paso 6: componentDidUpdate", state)
  }

}
export default App;
