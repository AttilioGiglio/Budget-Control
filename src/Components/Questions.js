import React,{Fragment,useState} from 'react';
import Error from './Error';


const Questions = () => {
    // define State
    const [amount, setAmount] = useState(0);
    const [error, stateError] = useState(false);
    
    // Function to read budget defined
    const readBudget = (e) => {
       setAmount(parseInt(e.target.value))
    }

    // Function to add budget defined
    const addBudget = (e) => {
        e.preventDefault();

        // Form validation
        if(amount<1){
            setError(true);
            return;
        }
        // passed validation
        setError(false);

     }

    return (
        <Fragment>
            <h2>Questions</h2>
            {error ? <Error /> : null}
            <form onSubmit={addBudget}>
                <input 
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={readBudget}
                />
                <input 
                type='submit'
                className='button-primary u-full-width'
                value='Budget request'
                />
            </form>
        </Fragment>
    )
}

export default Questions
