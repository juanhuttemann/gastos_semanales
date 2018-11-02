import React, { Component } from 'react'
import Expense from './Expense'

class List extends Component {
    render() {
        return(
            <div className="gastos-realizados">
                <h2>Listado</h2>
                <ul className="list-group list-group-flush">
                {Object.keys(this.props.gastos).map(key=>(
                    <Expense
                        key={key}
                        gasto={this.props.gastos[key]}
                    />
                ))}
                </ul>
            </div>
        )
    }
}

export default List