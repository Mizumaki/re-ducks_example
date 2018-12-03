import { throwError } from 'rxjs';

export interface IComments {
  id: string;
  comment: string;
}

export const getComments = async (url: string) => {
  return await fetch(url)
    .then(response => response.json())
    .then(comments => comments)
    .catch((e: string) => throwError(e));
}