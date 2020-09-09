import React, {Fragment} from 'react';
import {budgetChecking} from '../Components/Helper'

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

export default BudgetControl
