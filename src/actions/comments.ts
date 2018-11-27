import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const commentsActions = {
  fetch: actionCreator.async<{ url: string }, { comments: string[] }, { hasError: boolean }>('FETCH_COMMENTS'),
  loading: actionCreator<{ isLoading: boolean }>('LOAD_COMMENTS'),
};

export default commentsActions;

/*
export const getCommentsError = status => ({
  type: 'GET_COMMENTS_ERROR',
  hasError: status //bool
})

export const loadComments = status => ({
  type: 'LOAD_COMMENTS',
  isLoading: status //bool
})

export const fetchCommentsSuccess = comments => ({
  type: 'FETCH_COMMENTS_SUCCESS',
  comments // array
})

// jabbaさんの記事内ではactionsで定義されているが、reducer内で良い。
export const fetchComments = url => {
  return (dispatch) => {
    dispatch(loadComments(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadComments(false));

        return response;
      })
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentsSuccess(comments)))
      .catch(() => dispatch(getCommentsError(true)));
  }
}
*/