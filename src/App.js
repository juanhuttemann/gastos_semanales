import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List'

class App extends Component {
  state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }

  agregarGasto = gasto => {
    const gastos = {...this.state.gastos}

    gastos[`gastos${Date.now()}`] = gasto

    this.setState({
      gastos
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
