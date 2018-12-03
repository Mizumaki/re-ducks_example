import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers, epics } from "./ducks/index";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(epics);

export default store;