import commentsActions from '../actions/comments'
import CommentsComponent from '../components/Comments'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux';
import { IAppState } from '../reducers/index'

const mapStateToProps = (appState: IAppState) => {
  return Object.assign({}, appState.comments);
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {
    fetchData: (url: string) => dispatch(commentsActions.fetch.started({ url }))
  }
};

const Comments = connect(
  mapStateToProps, mapDispatchToProps
)(CommentsComponent)

export default Comments;