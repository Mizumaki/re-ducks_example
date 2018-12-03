import actionCreatorFactory from 'typescript-fsa';
import { IComments } from './epics';

const actionCreator = actionCreatorFactory();

const actions = {
  fetch: actionCreator.async<{ url: string }, { comments: IComments[] }, { hasError: boolean }>('FETCH_COMMENTS'),
  loading: actionCreator<{ isLoading: boolean }>('LOAD_COMMENTS'),
};

export default actions;