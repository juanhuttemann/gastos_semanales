import React, { Component } from 'react'

class Expense extends Component {
    render(){
        const {cantidadGasto, nombreGasto} = this.props.gasto
        return(
            <li className="list-group-item">
                    {nombreGasto} 
                    <span className="badge badge-primary badge-pill float-right">
                        Gs. {cantidadGasto}
                    </span>
            </li>
        )
    }
}

export default Expense;