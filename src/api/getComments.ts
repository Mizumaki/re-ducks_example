export interface IComments {
  id: string;
  comment: string;
}

const getComments = async (url: string) => {
  return await fetch(url)
    .then(response => response.json())
    .then(comments => comments)
    .catch((e: string) => e);
}

export default getComments;