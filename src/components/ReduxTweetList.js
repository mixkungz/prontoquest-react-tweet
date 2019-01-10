import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({
  tweetList: state.tweet
})

const ReduxTweetList = connect(mapStateToProps)(TweetList)

export { ReduxTweetList }
