import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
// dispatch: Dispatch < Action < any >>
import { commentsOperations, commentsSelectors } from '../../states/ducks/comments/index';
import CommentsComponent from '../components/Comments';
import { IAppState } from '../../states/ducks/index';

const mapStateToProps = (state: IAppState) => {
  return commentsSelectors.getRegularStates(state);
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return { fetchData: (url: string) => dispatch(commentsOperations.fetch(url)) }
};

const Comments = connect(
  mapStateToProps, mapDispatchToProps
)(CommentsComponent)

export default Comments;