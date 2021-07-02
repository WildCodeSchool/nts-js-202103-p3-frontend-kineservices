import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import FormationForm from './components/views/FormationForm';
// import DocumentationList from './components/views/DocumentationList';
// import Home from './components/views/Home';
// import SignIn from './components/views/SignIn';

function App() {
  return (
    <div className="App">
      <FormationForm />
      <GeneralRouter />
    </div>
  );
}

export default App;
