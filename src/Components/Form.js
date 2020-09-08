import React, {useState} from 'react'

const Form = () => {
    const[name, setName] = useState('');
    const[number, setNumber] = useState(0);

    const addExpenses = (e) =>{
        e.preventDefault();
        console.log(name,number)
    } 

    return (
        <form onSubmit={addExpenses}>
            <h2>Add your expenses</h2>
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

export default Form
