import { Action } from 'redux';
import { of, concat } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Epic, ofType } from 'redux-observable';
import commentsActions from './actions';

interface IPayloadAction extends Action {
  type: string;
  payload?: any;
}

export interface IComments {
  id: number;
  comment: string;
}

const commentsFetchEpic: Epic<IPayloadAction> = (actions$) => actions$.pipe(
  ofType(commentsActions.fetch.started.type),
  mergeMap((action: IPayloadAction) => concat(
    of(commentsActions.loading({ isLoading: true })),
    ajax.getJSON(action.payload.url).pipe(
      map((comments: IComments[]) => commentsActions.fetch.done({ params: action.payload.url, result: { comments } })),
      catchError(_ => of(commentsActions.fetch.failed({ params: action.payload.url, error: { hasError: true } }))),
    ),
    of(commentsActions.loading({ isLoading: false })),
  )),
);

export default commentsFetchEpic;