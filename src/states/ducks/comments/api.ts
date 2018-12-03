// import { throwError } from 'rxjs';
// import { resolve } from 'url';

export interface IComments {
  id: string;
  comment: string;
}

export const getComments = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => resolve(response.json()))
      .catch(e => reject(e))
  })
}