import React from 'react';
import './App.css'; // Global styles
import CodeDisplay from './components/CodeDisplay'; // Import the custom component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Copy Code From Here...😉</h1>
        <CodeDisplay />
      </header>
    </div>
  );
}

export default App;
