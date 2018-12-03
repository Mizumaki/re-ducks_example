import { combineEpics } from 'redux-observable';
import commentsFetchEpic from '../states/ducks/comments/epics';

const epics = combineEpics(
  commentsFetchEpic
);

export default epics;