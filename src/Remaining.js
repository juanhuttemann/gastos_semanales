import React, { Component } from 'react';

class Remaining extends Component {
    render() {
        return (
            <div className="alert alert-success">
                Restante: Gs. {this.props.restante}
            </div>
        )
    }
}

export default Remaining;