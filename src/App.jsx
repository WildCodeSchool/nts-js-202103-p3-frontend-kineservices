import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import DocumentationItem from './components/views/DocumentationItem';
import Home from './components/views/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <GeneralRouter />
      <DocumentationItem />
    </div>
  );
}

export default App;
