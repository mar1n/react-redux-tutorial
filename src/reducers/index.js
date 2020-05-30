import { combineReducers } from 'redux'
import storyReducer from './story'
import archiveReducer from './story'

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer,
})

export default rootReducer