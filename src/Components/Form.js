import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({setExpense, setCreateExpense}) => {
    const[name, setName] = useState('');
    const[number, setNumber] = useState(0);
    const[error, setError] = useState(false);
    // when the use add an expense
    const addExpenses = (e) =>{
        e.preventDefault();
        
        // validation
        if(number < 1 || isNaN(number) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
    // build expense
        const expense = {
            name,
            number,
            id: shortid.generate()
        }
    // adding the expense to app component 
        setExpense(expense);
        setCreateExpense(true);
    
    // reset form
    setName('');
    setNumber(0);
    }
    return (
        <form onSubmit={addExpenses}>
            <h2>Add your expenses</h2>
            {error ? <Error mensaje='Both inputs are required' /> : null }
            <div className='campo'>
                <label>Expense Name</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='Ex: Food and suppliers'
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Expense Quantity</label>
                <input 
                type='number'
                className='u-full-width'
                placeholder='Ex: 300'
                onChange={(e) => setNumber(parseInt(e.target.value))}
                />
            </div>
            <input 
            type='submit'
            className='button-primary u-full-width'
            value='Add expense'
            />
        </form>
    )
}

    Form.propTypes = {
        setExpense: PropTypes.func.isRequired ,
        setCreateExpense:  PropTypes.func.isRequired
    }

export default Form
