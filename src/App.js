import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  // Search Github users
  searchUsers = async (query) => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/search/users?q=${query}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: response.data.items, loading: false })
  }

  // Get a single Github user
  getUser = async (username) => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/users/${username}?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ user: response.data, loading: false })
  }

  // Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ repos: response.data, loading: false })
  }

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false})

  // Set alert
  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })

    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    const { users, alert, user, repos, loading } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={ this.clearUsers } 
                    showClear={ (users.length > 0) }
                    setAlert={ this.setAlert } 
                  />
                  <Users users={users} loading={loading} />
                </Fragment>}>
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/users/:userName" element={
                <User
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos} 
                  user={user}
                  repos={repos} 
                  loading={loading} />
              } />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
