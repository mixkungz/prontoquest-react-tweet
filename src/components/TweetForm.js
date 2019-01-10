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
  render() {
    return (
      <Box>
        <StyledInput />
        <StyledButton>Tweet</StyledButton>
      </Box>
    )
  }
}

export { TweetForm }
