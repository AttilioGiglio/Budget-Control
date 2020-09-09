import React, { useState, useEffect } from 'react';
import Questions from './Components/Questions';
import Form from './Components/Form';
import List from './Components/List';
import BudgetControl from './Components/BudgetControl';


function App() {
  // define state
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(()=>{
   if(createExpense) {
    // add a new budget 
    setExpenses([...expenses, expense]);
  
    // remain from present budget
    const budgetRemaining = rest - expense.number;
    setRest(budgetRemaining);
  
    setCreateExpense(false);
  }
  }
    , [expense])

  // // When we add a new expense
  // const addNewExpense = expense => {
  //   setExpenses([...expenses, expense])
  // }

  return (
    <div className="container">
      <header>
        <h1>Week Expenses</h1>
      </header>
      <div className='contenido-principal contenido'>
        {showQuestion ?
          (
            <Questions
              setBudget={setBudget}
              setRest={setRest}
              setShowQuestion={setShowQuestion}
            />
          ) :
          (

            <div className='row'>
              <div className='one-half column'>
                <Form
                  // addNewExpense={addNewExpense}
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className='one-half column'>
                <List
                  expenses={expenses}
                />
                <BudgetControl 
                budget={budget}
                rest={rest}
                />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
