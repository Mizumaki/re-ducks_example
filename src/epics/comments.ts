import { Action } from 'redux';
import { map, mergeMap } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
// import { ofAction } from 'typescript-fsa-redux-observable';
import commentsActions from '../actions/comments';
import getComments from '../api/getComments';

interface IPayloadAction extends Action {
  type: string;
  payload?: any;
}

const commentsFetchEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  mergeMap((action: IPayloadAction) => getComments(action.payload.url).pipe(
    map((comments: string[]) => commentsActions.fetch.done({ params: action.payload.url, result: { comments } }))
  ))
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