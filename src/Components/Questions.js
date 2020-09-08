import React,{Fragment} from 'react'

const Questions = () => {
    return (
        <Fragment>
            <h2>Questions</h2>
            <form>
                <input 
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
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
