import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PayDuesForm from './components/Forms/Dues/PayDuesForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/pay-dues' component={PayDuesForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
