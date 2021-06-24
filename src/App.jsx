import React from 'react';

import SignUpKine from './components/views/SignUpKine';
import SignIn from './components/views/SignIn';
import GeneralRouter from './components/commons/GeneralRouter';

function App() {
  return (
    <div className="App">
      <SignUpKine />
      <SignIn />
      <GeneralRouter />
    </div>
  );
}

export default App;
