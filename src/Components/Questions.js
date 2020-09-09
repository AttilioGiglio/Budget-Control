import React,{Fragment,useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Questions = ({setBudget, setRest, setShowQuestion}) => {
    // define State
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);
    
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
        // Setup budget and rest
        setBudget(amount);
        setRest(amount);
        setShowQuestion(false);

     }

    return (
        <Fragment>
            <h2>Define your budget</h2>
            {error ? <Error mensaje='Incorrect Budget' /> : null}
            <form onSubmit={addBudget}>
                <input 
                type='number'
                className='u-full-width'
                placeholder='Choose your budget'
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

Questions.propTypes = {
    setBudget: PropTypes.func.isRequired, 
    setRest: PropTypes.func.isRequired, 
    setShowQuestion:  PropTypes.func.isRequired
}

export default Questions
