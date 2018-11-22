import 'whatwg-fetch';
import { Observable } from 'rxjs';

const getComments = (url: string) => {
  const request = fetch(url)
    .then((response: any) => response.json())
    .catch((e: string) => e);
  return Observable.from(request);
}

export default getComments;