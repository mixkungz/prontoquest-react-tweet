import { ADD_TWEET } from '../actions/types'

const initialState = []

const tweetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TWEET:
      initialState.unshift(payload.tweet)
      return initialState
  }
}

export { tweetReducer }
