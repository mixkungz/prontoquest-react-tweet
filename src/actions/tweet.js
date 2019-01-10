import { ADD_TWEET } from './types'

const addTweet = tweet => {
  return { type: ADD_TWEET, payload: { tweet: tweet } }
}

export { addTweet }
