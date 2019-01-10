import { combineReducers } from 'redux'
import { tweetReducer } from './tweetReducer'

const rootReducers = combineReducers({
  tweet: tweetReducer
})

export { rootReducers }
