import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import GlobalSearch from '../views/GlobalSearch';
import ServiceList from '../views/ServiceList';
import DocumentationForm from '../views/DocumentationForm';
import DocumentationList from '../views/DocumentationList';
import FormationList from '../views/FormationList';
import SignUpSummary from '../views/SignUpSummary';
import SignIn from '../views/SignIn';
import SignUpKine from '../views/SignUpKine';
import NavBar from './NavBar';
import DocumentationItem from '../views/DocumentationItem';
import Header from './Header';
import Profile from '../views/Profile';
import FormationItem from '../views/FormationItem';
import FormationForm from '../views/FormationForm';
import ServiceForm from '../views/ServiceForm';

function GeneralRouter() {
  // setTimeout(
  //   20000,
  //   localStorage.removeItem('USERID'),
  //   localStorage.removeItem('TOKEN')
  // );

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/recherche-globale">
            <Header />
            <GlobalSearch />
          </Route>
          <Route exact path="/service">
            <Header />
            <ServiceList />
          </Route>
          <Route exact path="/service-form">
            <Header />
            <ServiceForm />
          </Route>
          <Route exact path="/documentation-form">
            <Header />
            <DocumentationForm />
          </Route>
          <Route exact path="/documentation">
            <Header />
            <DocumentationList />
          </Route>
          <Route exact path="/documentation-item">
            <Header />
            <DocumentationItem />
          </Route>
          <Route exact path="/formation">
            <Header />
            <FormationList />
          </Route>
          <Route exact path="/formation-form">
            <Header />
            <FormationForm />
          </Route>
          <Route exact path="/formation-item">
            <Header />
            <FormationItem />
          </Route>
          <Route exact path="/profil">
            <Header />
            <Profile />
          </Route>
          <Route exact path="/profil/:id">
            <Header />
            <Profile />
          </Route>
          <Route exact path="/connexion">
            <Header />
            <SignIn />
          </Route>
          <Route exact path="/inscription">
            <Header />
            <SignUpSummary />
          </Route>
          <Route exact path="/inscription-kine">
            <Header />
            <SignUpKine />
          </Route>
        </Switch>
      </div>
      <NavBar />
    </Router>
  );
}

export default GeneralRouter;
