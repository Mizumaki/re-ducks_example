import { reducerWithInitialState } from 'typescript-fsa-reducers';
import commentsActions from '../actions/comments';

export interface CommentsState {
  hasError: boolean;
  isLoading: boolean;
  comments: string[];
  url: string;
}

const initialState: CommentsState = {
  hasError: false,
  isLoading: false,
  comments: [],
  url: ""
};

export const commentsReducer = reducerWithInitialState(initialState)
  .case(commentsActions.loading, (state, isLoading) => {
    return Object.assign({}, state, { isLoading });
  })
  .case(commentsActions.fetch.done, (state, comments) => {
    return Object.assign({}, state, { comments })
  })
  .case(commentsActions.fetch.started, (state, url) => {
    return Object.assign({}, state, { url })
  })
  .case(commentsActions.fetch.failed, (state, hasError) => {
    return Object.assign({}, state, { hasError })
  })

export default commentsReducer;