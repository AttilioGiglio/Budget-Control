import React, {Fragment} from 'react';
import {budgetChecking} from '../Components/Helper';
import PropTypes from 'prop-types';

const BudgetControl = ({budget,rest}) => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: ${budget}
            </div>
            <div className={budgetChecking(budget,rest)}>
                Restante: ${rest}
            </div>
        </Fragment>
    )
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
}

export default BudgetControl
