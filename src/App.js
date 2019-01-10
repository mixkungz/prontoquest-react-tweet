// React & Library
import React, { Component } from 'react'

// Local
import './App.css'
import logo from './logo.svg'
import { TweetForm } from './components/TweetForm'
import { TweetList } from './components/TweetList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <TweetForm />
          <TweetList />
        </div>
      </div>
    )
  }
}

export default App
