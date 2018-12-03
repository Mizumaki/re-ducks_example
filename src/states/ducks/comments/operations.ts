// import { Action, Dispatch } from 'redux';
import actions from "./actions";

const fetch = (url: string) => {
  return actions.fetch.started({ url });
}

export default { fetch };