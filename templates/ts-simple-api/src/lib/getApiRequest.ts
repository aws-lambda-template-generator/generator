import request from 'request-promise';

interface IResponse {
  statusCode: number;
  headers: {};
  body: string;
}

export const getApiRequest = (uri: string) => {

  const options = {
    method: 'GET',
    uri: uri,
    resolveWithFullResponse: true
  };

  return request(options)
    .then((response: IResponse): any => {
      const output = {
        statusCode: response.statusCode,
        headers: response.headers,
        body: JSON.parse(response.body)
      };
      return output;
    })
    .catch((err: Error) => {
      return `Api request error ${err}`;
    });
};
