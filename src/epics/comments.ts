import { Action } from 'redux';
import { map, mergeMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable';
import commentsActions from '../actions/comments';
import getComments from '../api/getComments';

const commentsFetchEpic: Epic<Action> =
  (actions$) => actions$.ofAction(commentsActions.fetch.started)
    .mergeMap((action: Action) =>
      getComments(action.params.url)
        .map((comments: string[]) => commentsActions.fetch.done({ comments }))
    );


/*
const commentsFetchEpic: Epic<Action> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  mergeMap((action: Action) => ajax.getJSON(action.payload.url).pipe(
    map((comments: string[]) => commentsActions.fetch.done({ comments }))
    )
  )
)
*/

export default commentsFetchEpic;