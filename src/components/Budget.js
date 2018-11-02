import React, { Component } from 'react';

class Budget extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Presupuesto: Gs. {this.props.presupuesto}
            </div>
        )
    }
}

export default Budget;