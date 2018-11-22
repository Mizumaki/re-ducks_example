import { combineReducers } from 'redux';
import { CommentsState, commentsReducer } from './comments';

export type AppState = {
  comments: CommentsState
}

export const reducers = combineReducers<AppState>({ comments: commentsReducer })

export default reducers;