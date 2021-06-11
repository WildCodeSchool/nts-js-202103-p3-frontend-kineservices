import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import GlobalSearch from '../views/GlobalSearch';
import Service from '../views/Service';
import DocumentationList from '../views/DocumentationList';
import Training from '../views/Training';
import Profile from '../views/Profile';
import SignUpSummary from '../views/SignUpSummary';
import SignIn from '../views/SignIn';
import SignUpKine from '../views/SignUpKine';
import SignUpCompany from '../views/SignUpCompany';
import NavBar from './NavBar';

function GeneralRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recherche-globale">
            <GlobalSearch />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/documentation">
            <DocumentationList />
          </Route>
          <Route exact path="/formation">
            <Training />
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
          <Route exact path="/inscription-entreprise">
            <SignUpCompany />
          </Route>
        </Switch>
      </div>
      <NavBar />
    </Router>
  );
}

export default GeneralRouter;
