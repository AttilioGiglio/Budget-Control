import React from 'react'

const Form = () => {
    return (
        <form>
            <h2>Add your expenses</h2>
            <div className='campo'>
                <label>Expense Name</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='Ex: Food and suppliers'
                />
            </div>
            <div className='campo'>
                <label>Expense Quantity</label>
                <input 
                type='number'
                className='u-full-width'
                placeholder='Ex: 300'
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
