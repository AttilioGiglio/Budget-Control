import React, { useState } from 'react';
import Questions from './Components/Questions';
import Form from './Components/Form';


function App() {
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

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
                <Form />
              </div>
              <div className='one-half column'>
                2
        </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
