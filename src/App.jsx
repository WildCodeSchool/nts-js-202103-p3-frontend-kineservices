import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import SignIn from './components/views/SignIn';

function App() {
  return (
    <div className="App">
      <SignIn />
      <GeneralRouter />
    </div>
  );
}

export default App;
