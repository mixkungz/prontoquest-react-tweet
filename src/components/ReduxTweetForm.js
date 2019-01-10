import React, { Component } from 'react'
import styled from 'styled-components'
import { addTweet } from '../actions/tweet'
import { connect } from 'react-redux'
const StyledInput = styled.input`
  width: 80%;
  height: 2em;
`
const StyledButton = styled.button`
  margin: 0 0.6em;
  width: 10%;
  font-size: 1em;
`
const Box = styled.div`
  display: inline;
`

class TweetForm extends Component {
  state = {
    tweetInput: ''
  }

  handleInput = event => {
    this.setState({ tweetInput: event.target.value })
  }

  addTweet = () => {
    const { tweetInput } = this.state
    const { addTweet } = this.props

    if (tweetInput === '') return

    addTweet(tweetInput)

    this.setState({ tweetInput: '' })
  }

  render() {
    return (
      <Box>
        <StyledInput
          onChange={this.handleInput}
          value={this.state.tweetInput}
        />
        <StyledButton onClick={this.addTweet}>Tweet</StyledButton>
      </Box>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(addTweet(tweet))
})

const ReduxTweetForm = connect(
  null,
  mapDispatchToProps
)(TweetForm)

export { ReduxTweetForm }
