import React from 'react';
import Questions from './Components/Questions';


function App() {
  return (
    <div className="container">
      <header>
      <h1>Budget</h1>
      </header>
      <div className='contenido-principal contenido'>
      <Questions/>
      </div>
    </div>
  );
}

export default App;
