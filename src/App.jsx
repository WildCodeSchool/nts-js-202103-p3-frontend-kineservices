import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import DocumentationList from './components/views/DocumentationList';
import Home from './components/views/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <GeneralRouter />
      <DocumentationList />
    </div>
  );
}

export default App;
