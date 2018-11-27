import { from } from 'rxjs';
import 'whatwg-fetch';

const getComments = (url: string) => {
  const request = fetch(url)
    .then((response: any) => response.json())
    .catch((e: string) => e);
  return from(request);
}

export default getComments;