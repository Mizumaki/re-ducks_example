import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import commentsReducer, { ICommentsState } from './comments/index';
import commentsFetchEpic from './comments/epics';

export interface IAppState {
  comments: ICommentsState
}

export const reducers = combineReducers<IAppState>({ comments: commentsReducer })

export const epics = combineEpics(
  commentsFetchEpic
);