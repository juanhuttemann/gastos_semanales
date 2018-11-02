import React, {Component} from 'react';
import Budget from './Budget';
import Remaining from './Remaining';

class BudgetControl extends Component {
    render(){
        return (
            <React.Fragment>
                <Budget
                    presupuesto={this.props.presupuesto}
                    />
                
                <Remaining
                    restante={this.props.restante}
                />
            </React.Fragment>
        )
    }
}

export default BudgetControl;