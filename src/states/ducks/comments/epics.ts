import { Action } from 'redux';
import { of, from, concat } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
import commentsActions from './actions';
import { getComments, IComments } from './api';

interface IPayloadAction extends Action {
  type: string;
  payload?: any;
}

const commentsFetchEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  mergeMap((action: IPayloadAction) => concat(
    of(commentsActions.loading({ isLoading: true })),
    from(getComments(action.payload.url)).pipe(
      map((comments: IComments[]) => commentsActions.fetch.done({ params: action.payload.url, result: { comments } })),
      // TODO: 以下ではError handlingができない
      catchError(error => of(commentsActions.fetch.failed({ params: action.payload.url, error: { hasError: true } }))),
    ),
    of(commentsActions.loading({ isLoading: false })),
  )),
);

export default commentsFetchEpic;