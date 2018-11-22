import * as React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { AppState } from '../reducers/index'
import commentsActions from '../actions/comments'
import * as AppComponent from '../components/app'

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState.comments);
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchData: (url: string) => dispatch(commentsActions.fetch.started(url))
  }
};

// Container
const App = connect(
  mapStateToProps, mapDispatchToProps
)(AppComponent)

export default App;