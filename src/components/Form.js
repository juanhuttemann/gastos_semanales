import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    nombreGasto     = React.createRef();
    cantidadGasto   = React.createRef();

    crearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value,
        }


        this.props.agregarGasto(gasto);
        
        e.currentTarget.reset();
    }

    render(){
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aquí</h2>
                <div className="form-group">
                    <label htmlFor="nombreGasto">Nombre Gasto:</label>
                    <input ref={this.nombreGasto} type="text" className="form-control" id="nombreGasto" placeholder="Ej. Transporte"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadGasto">Cantidad:</label>
                    <input ref={this.cantidadGasto} type="text" className="form-control" id="cantidadGasto" placeholder="Ej. 80.000" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }
}

Form.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Form;