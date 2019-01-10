import { ADD_TWEET } from '../actions/types'

const initialState = []

const tweetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TWEET:
      return [payload.tweet, ...state]
    default:
      return state
  }
}

export { tweetReducer }
