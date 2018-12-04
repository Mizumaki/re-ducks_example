import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import commentsReducer, { ICommentsState, commentsFetchEpic } from './comments/index';

export interface IAppState {
  comments: ICommentsState
}

export const reducers = combineReducers<IAppState>({ comments: commentsReducer })

export const epics = combineEpics(
  commentsFetchEpic
);
