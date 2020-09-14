import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar/Navbar';
import PayDuesForm from './components/Forms/Dues/PayDuesForm';
import DuesList from './components/Dues/DuesList';
import Profile from './components/Profile/Profile';
import Landing from './components/Landing/Landing';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/actions/users/usersActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Switch>
          <PrivateRoute exact path='/dues' component={DuesList} />
          <Route exact path='/pay-dues' component={PayDuesForm} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
