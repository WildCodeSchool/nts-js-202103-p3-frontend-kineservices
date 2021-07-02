import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import DocumentationList from './components/views/DocumentationList';
import Home from './components/views/Home';

import SignUpKine from './components/views/SignUpKine';
import SignIn from './components/views/SignIn';

function App() {
  return (
    <div className="App">
      <Home />
      <GeneralRouter />
      <DocumentationList />
      <SignUpKine />
      <SignIn />
    </div>
  );
}

export default App;
