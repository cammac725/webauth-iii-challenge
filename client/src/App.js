import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Signin from './signin/Signin';
import Users from './users/Users';
import Register from './register/Register';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to='/signin'>Signin</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/register'>Register</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/users'>Users</NavLink>
            &nbsp; | &nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path='/signin' component={Signin} />
          <Route path='/register' component={Register} />
          <Route path='/users' component={Users} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login')
  }

}

export default withRouter(App);
