import React, { Component } from 'react'
import Expense from './Expense'
import PropTypes from 'prop-types';


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

List.propTypes = {
    gastos: PropTypes.object.isRequired
}

export default List