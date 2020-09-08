import React,{Fragment,useState} from 'react';

const Questions = () => {
    // define State
    const [amount, setAmount] = useState(0);
    
    // Function to read budget defined
    const readBudget = (e) => {
       setAmount(parseInt(e.target.value, 10))
    }

    // Function to add budget defined
    const addBudget = (e) => {
     }

    return (
        <Fragment>
            <h2>Questions</h2>
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
