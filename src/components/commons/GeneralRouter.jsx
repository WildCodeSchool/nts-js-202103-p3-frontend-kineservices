import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import GlobalSearch from '../views/GlobalSearch';
import ServiceList from '../views/ServiceList';
import DocumentationForm from '../views/DocumentationForm';
import DocumentationList from '../views/DocumentationList';
import FormationList from '../views/FormationList';
import Profile from '../views/Profile';
import SignUpSummary from '../views/SignUpSummary';
import SignIn from '../views/SignIn';
import SignUpKine from '../views/SignUpKine';
import NavBar from './NavBar';
import DocumentationItem from '../views/DocumentationItem';
import Header from './Header';
import FormationItem from '../views/FormationItem';
import FormationForm from '../views/FormationForm';
import ServiceForm from '../views/ServiceForm';


function GeneralRouter() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recherche-globale">
            <GlobalSearch />
          </Route>
          <Route exact path="/service">
            <ServiceList />
          </Route>
          <Route exact path="/service-form">
            <ServiceForm />
          </Route>
          <Route exact path="/documentation-form">
            <DocumentationForm />
          </Route>
          <Route exact path="/documentation">
            <DocumentationList />
          </Route>
          <Route exact path="/documentation-item">
            <DocumentationItem />
          </Route>
          <Route exact path="/formation">
            <FormationList />
          </Route>
          <Route exact path="/formation-form">
            <FormationForm />
          </Route>
          <Route exact path="/formation-item">
            <FormationItem />
          </Route>
          <Route exact path="/profil">
            <Profile />
          </Route>
          <Route exact path="/connexion">
            <SignIn />
          </Route>
          <Route exact path="/inscription">
            <SignUpSummary />
          </Route>
          <Route exact path="/inscription-kine">
            <SignUpKine />
          </Route>
        </Switch>
      </div>
      <NavBar />
    </Router>
  );
}

export default GeneralRouter;
