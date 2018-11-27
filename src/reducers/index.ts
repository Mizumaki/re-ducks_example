import { combineReducers } from 'redux';
import { ICommentsState, commentsReducer } from './comments';

export interface IAppState {
  comments: ICommentsState
}

export const reducers = combineReducers<IAppState>({ comments: commentsReducer })

export default reducers;