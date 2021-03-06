import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/main/Main';
import Contacts from './components/contacts/Contacts';
import Contact from './components/contact/View';
import Add from './components/contact/Add';
import Update from './components/contact/Update';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from './themes/default';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div className="App">
          <Header />
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/contacts/add" component={Add} />
              <Route exact path="/contacts/:id" component={Contact} />
              <Route exact path="/contacts/:id/update" component={Update} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
