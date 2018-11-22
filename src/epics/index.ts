import { combineEpics } from 'redux-observable';
import commentsFetchEpic from './comments';

const epics = combineEpics(
  commentsFetchEpic
);

export default epics;