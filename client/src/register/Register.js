import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
  }

  render() {
    return (
      <div>
        <h1> Register Here</h1>

        <div>
          <form className='ui form' onSubmit={this.handleSubmit}>
            <div className='ui icon input'>
              <label htmlFor='username'></label>
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
              <label htmlFor='password'></label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='ui icon input'>
              <label htmlFor='department'></label>
              <input
                type='text'
                name='department'
                id='department'
                placeholder='Department'
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:8000/api/auth/register'

    axios.post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('./users')
      })
      .catch(error => {
        console.error(error)
      })
  }

}

export default Register;