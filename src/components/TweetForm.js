import React, { Component } from 'react'
import styled from 'styled-components'

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

  addTweet = () => {
    const { tweetInput } = this.state
    const { addTweet } = this.props

    if (tweetInput === '') return

    addTweet(tweetInput)

    this.setState({ tweetInput: '' })
  }

  handleInput = event => {
    this.setState({ tweetInput: event.target.value })
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

export { TweetForm }
