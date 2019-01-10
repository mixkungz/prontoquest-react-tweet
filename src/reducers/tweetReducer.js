import { ADD_TWEET } from '../actions/types'

const initialState = []

const tweetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TWEET:
      state.unshift(payload.tweet)
      return state
    default:
      return state
  }
}

export { tweetReducer }
