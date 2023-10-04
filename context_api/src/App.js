import React from 'react';
import './App.css';
import Counter from './Counter';
import { AppProvider } from './AppContext'; // Import the AppProvider

function App() {
  return (
    <div className="App">
      <h1>Context API Example</h1>
      <AppProvider> {/* Wrap Counter with AppProvider */}
        <Counter />
      </AppProvider>
    </div>
  );
}

export default App;