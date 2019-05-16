import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='ui icon input'>
            <label htmlFor='username' />
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Name'
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='ui icon input'>
            <label htmlFor='password' />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type='submit'>Sign in</button>
          </div>
        </form>
      </div>
    )
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const endpoint = 'http://localhost:8000/api/auth/login'
    axios.post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users')
      })
      .catch(error => {
        console.error(error)
      })
  }

}

export default Signin;