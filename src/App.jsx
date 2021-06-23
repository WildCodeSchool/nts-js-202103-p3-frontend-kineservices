import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
// import DocumentationForm from './components/views/DocumentationForm';
import ServiceForm from './components/views/ServiceForm';

function App() {
  return (
    <div className="App">
      <GeneralRouter />
      <ServiceForm />
    </div>
  );
}

export default App;
