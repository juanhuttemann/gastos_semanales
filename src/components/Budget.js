import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Budget extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Presupuesto: Gs. {this.props.presupuesto}
            </div>
        )
    }
}

Budget.propTypes = {
    presupuesto: PropTypes.string.isRequired
}

export default Budget;