import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';
import {validarPresupuesto} from './Helper';

class App extends Component {
  state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("¿Cuál es el presupuesto?")
    let resultado = validarPresupuesto(presupuesto)
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto();
    }
  }

  agregarGasto = gasto => {
    const gastos = {...this.state.gastos}

    gastos[`gastos${Date.now()}`] = gasto

    this.restartPresupuesto(gasto.cantidadGasto)

    this.setState({
      gastos
    })
  }

  restartPresupuesto = cantidad => {
    let restar = Number(cantidad)

    let restante = this.state.restante;

    restante -= restar;

    restante = String(restante)

    this.setState({
      restante: restante
    })
     
  }

  render() {
    return (
      <div className="container">
          <Header titulo="Gastos Semanales"/>
      <div className="jumbotron">
          <div className="row">
            <div className="col-md-6">
                <Form
                  agregarGasto = {this.agregarGasto}
                />
            </div>
            <div className="col-md-6">
              <List
                gastos = {this.state.gastos}
              />

              <BudgetControl
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
