import actionCreatorFactory from 'typescript-fsa';
import { IComments } from '../api/getComments';

const actionCreator = actionCreatorFactory();

const commentsActions = {
  fetch: actionCreator.async<{ url: string }, { comments: IComments[] }, { hasError: boolean }>('FETCH_COMMENTS'),
  loading: actionCreator<{ isLoading: boolean }>('LOAD_COMMENTS'),
};

export default commentsActions;