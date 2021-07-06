import React from 'react';
import GeneralRouter from './components/commons/GeneralRouter';
import FormationForm from './components/views/FormationForm';
import FormationItem from './components/views/FormationItem';
import FormationList from './components/views/FormationList';

function App() {
  return (
    <div className="App">
      <FormationForm />
      <FormationList />
      <FormationItem />
      <GeneralRouter />
    </div>
  );
}

export default App;
