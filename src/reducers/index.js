import { combineReducers } from 'redux'
import { tweetReducers } from './tweetReducers'

const rootReducers = combineReducers({
  tweet: tweetReducers
})

export { rootReducers }
