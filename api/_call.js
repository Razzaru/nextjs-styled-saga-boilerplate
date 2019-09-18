import fetch from 'isomorphic-unfetch';

const defaultUrl = null;

export default async ({
  endpoint, headers = {}, method = 'GET', body = {},
}) => {
  const stringifiedBody = JSON.stringify(body);

  const postBody = method === 'POST' ? {
    body: stringifiedBody,
  } : {};

  const result = await fetch(`${defaultUrl}/${endpoint}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    ...postBody,
    method,
  });


  const json = await result.json();

  return json;
};
