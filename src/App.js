// React & Library
import React, { Component } from 'react'

// Local
import './App.css'
import logo from './logo.svg'
import { TweetForm } from './components/TweetForm'
import { TweetList } from './components/TweetList'

class App extends Component {
  state = {
    tweetList: []
  }

  addTweet = async newTweet => {
    await this.setState(prevState => {
      prevState.tweetList.unshift(newTweet)
      return {
        tweetList: prevState.tweetList
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <TweetForm addTweet={this.addTweet} />
          <TweetList tweetList={this.state.tweetList} />
        </div>
      </div>
    )
  }
}

export default App
