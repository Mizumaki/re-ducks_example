import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from "./reducers/index";
import epics from './epics/index';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(epics);

export default store;