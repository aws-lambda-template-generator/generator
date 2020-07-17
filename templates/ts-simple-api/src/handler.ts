import { ICallback, IEventPayload } from '../types/models';

const getApiRequest = require('./lib/getApiRequest');
const uri = 'https://jsonplaceholder.typicode.com/users';

module.exports.example = async(event: IEventPayload, context: any, callback: ICallback) => {

  const response = await getApiRequest.getApiRequest(uri);
  let statusCode;
  let responseBody;

  if ((typeof response) == 'object') {
    statusCode = response.statusCode || null;
    responseBody = JSON.stringify(response.body) || null;
  }
  else if ((typeof response) == 'string') {
    statusCode = 404;
    responseBody = response;
  }

  else {
    statusCode = 404;
    responseBody = null;
  }

  const output = {
    'statusCode': statusCode,
    'headers': {},
    'body': responseBody,
    'isBase64Encoded': false
    };

  callback(null, output);
};
