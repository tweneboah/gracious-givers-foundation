import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar/Navbar';
import PayDuesForm from './components/Forms/Dues/PayDuesForm';
import DuesList from './components/Dues/DuesList';
import Landing from './components/Landing/Landing';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/actions/users/usersActions';
import Gallery from './components/Gallery/Gallery';
import Members from './components/Members/Members';
import Register from './components/Forms/Users/Register';
import Login from './components/Forms/Users/Login';
import Profile from './components/Profile/Profile';

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
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/members' component={Members} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/users' component={Members} />
          <Route exact path='/pay-dues' component={PayDuesForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
