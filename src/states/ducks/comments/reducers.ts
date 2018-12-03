import { reducerWithInitialState } from 'typescript-fsa-reducers';
import commentsActions from './actions';
import { IComments } from './api';

export interface ICommentsState {
  hasError: boolean;
  isLoading: boolean;
  comments: IComments[];
}

const initialState: ICommentsState = {
  hasError: false,
  isLoading: false,
  comments: [],
};

const reducer = reducerWithInitialState(initialState)
  .case(commentsActions.loading, (state, payload) => {
    return Object.assign({}, state, { isLoading: payload.isLoading });
  })
  .case(commentsActions.fetch.done, (state, payload) => {
    return Object.assign({}, state, { comments: payload.result.comments })
  })
  .case(commentsActions.fetch.failed, (state, payload) => {
    return Object.assign({}, state, { hasError: payload.error.hasError })
  })

export default reducer;