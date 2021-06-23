import React from 'react';
import SignIn from './components/views/SignIn';
import SignUpKine from './components/views/SignUpKine';

import GeneralRouter from './components/commons/GeneralRouter';
import DocumentationForm from './components/views/DocumentationForm';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUpKine />
      <GeneralRouter />
      <DocumentationForm />
    </div>
  );
}

export default App;
