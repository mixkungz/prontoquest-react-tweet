import React, { Component } from 'react'
import styled from 'styled-components'

const Tweet = styled.p`
  border: 1px solid #000;
`
const Container = styled.div`
  max-width: 100%;
`
class TweetList extends Component {
  renderTweetList = () =>
    this.props.tweetList.map(tweet => <Tweet key={tweet}>{tweet}</Tweet>)
  render() {
    const { tweetList } = this.props
    return (
      <Container>
        {tweetList.length > 0 ? this.renderTweetList() : <span>no tweet</span>}
      </Container>
    )
  }
}

export { TweetList }
