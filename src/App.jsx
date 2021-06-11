import React from 'react';
import Home from './components/views/Home';
import GeneralRouter from './components/commons/GeneralRouter';
import SignUpSummary from './components/views/SignUpSummary';
import SignUpKine from './components/views/SignUpKine';
import DocumentationForm from './components/views/DocumentationForm';

function App() {
  return (
    <div className="App">
      <Home />
      <GeneralRouter />
      <SignUpSummary />
      <SignUpKine />
      <DocumentationForm />
    </div>
  );
}

export default App;
