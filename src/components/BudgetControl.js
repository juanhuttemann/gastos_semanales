import React, {Component} from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import PropTypes from 'prop-types';


class BudgetControl extends Component {
    render(){
        return (
            <React.Fragment>
                <Budget
                    presupuesto={this.props.presupuesto}
                    />
                
                <Remaining
                    presupuesto = {this.props.presupuesto}
                    restante={this.props.restante}
                />
            </React.Fragment>
        )
    }
}

BudgetControl.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default BudgetControl;