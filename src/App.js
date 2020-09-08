import React, {useState} from 'react';
import Questions from './Components/Questions';


function App() {
  const [budget,setBudget] = useState(0);
  const [rest, setRest] = useState(0);

  return (
    <div className="container">
      <header>
      <h1>Week Expenses</h1>
      </header>
      <div className='contenido-principal contenido'>
      <Questions
      setBudget={setBudget}
      setRest={setRest}
      />
      </div>
    </div>
  );
}

export default App;
