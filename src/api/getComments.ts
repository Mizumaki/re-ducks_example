import { from } from 'rxjs';
import 'whatwg-fetch';

export interface IComments {
  id: string;
  comment: string;
}

const getComments = (url: string) => {
  const request = fetch(url)
    .then((response: any) => response.json())
    .then(comments => comments)
    .catch((e: string) => e);
  return from(request);
}

export default getComments;