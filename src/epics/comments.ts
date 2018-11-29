import { Action } from 'redux';
import { of, from, concat } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
// import { ofAction } from 'typescript-fsa-redux-observable';
import { IComments } from '../api/getComments';
import commentsActions from '../actions/comments';
import getComments from '../api/getComments';

interface IPayloadAction extends Action {
  type: string;
  payload?: any;
}

const commentsFetchingEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  mergeMap((action: IPayloadAction) => concat(
    of(commentsActions.loading({ isLoading: true })),
    from(getComments(action.payload.url)).pipe(
      map((comments: IComments[]) => commentsActions.fetch.done({ params: action.payload.url, result: { comments } }))
    ),
    of(commentsActions.loading({ isLoading: false })),
    catchError(() => of(commentsActions.fetch.failed({ params: action.payload.url, error: { hasError: true } })))
  )),
  /*
  from(getComments(action.payload.url)).pipe(
    startWith(commentsActions.loading({ isLoading: true })),
    map((comments: IComments[]) => commentsActions.fetch.done({ params: action.payload.url, result: { comments } })),
    endWith({ type: commentsActions.loading.type, payload: { isLoading: false } })
  ))
 */
);


/*
const commentsFetchStartEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  map(() => commentsActions.loading({ isLoading: true }))
);

const commentsFetchDoneEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.done.type),
  map(() => commentsActions.loading({ isLoading: false }))
);
*/

/*
const commentsFetchEpic = combineEpics(
  commentsFetchStartEpic,
  commentsFetchingEpic,
  commentsFetchDoneEpic
)
*/
const commentsFetchEpic = commentsFetchingEpic;

export default commentsFetchEpic;