import React, { Component } from 'react';
import {revisarPresupuesto} from '../Helper';
import PropTypes from 'prop-types';


class Remaining extends Component {
    render() {
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return (
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: Gs. {this.props.restante}
            </div>
        )
    }
}

Remaining.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default Remaining;