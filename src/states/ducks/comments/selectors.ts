import { IAppState } from '../index';

export const getRegularStates = (state: IAppState) => {
  const commentsState = state.comments;

  const comments = commentsState.comments;
  const isLoading = commentsState.isLoading;
  const hasError = commentsState.hasError;

  return {
    isLoading,
    hasError,
    comments
  }
}

export default { getRegularStates };