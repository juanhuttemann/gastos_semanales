import React, { Component } from 'react'

class Expense extends Component {
    render(){
        const {cantidadGasto, nombreGasto} = this.props.gasto
        return(
            <li className="list-group-item">
                <p>
                    {nombreGasto} 
                    <span className="badge badge-primary badge-pill float-right">
                         {cantidadGasto}
                    </span>
                </p>
            </li>
        )
    }
}

export default Expense;