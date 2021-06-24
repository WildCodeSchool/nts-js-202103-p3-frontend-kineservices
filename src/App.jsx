import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import Profile from './components/views/Profile';
import SignIn from './components/views/SignIn';

function App() {
  return (
    <div className="App">
      <GeneralRouter />
      <SignIn />
      <Profile />
    </div>
  );
}

export default App;
