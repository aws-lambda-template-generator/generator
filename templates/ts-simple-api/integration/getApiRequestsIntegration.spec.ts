import { expect } from 'chai';
import { getApiRequest } from '../src/lib/getApiRequest';

const uri = 'https://jsonplaceholder.typicode.com/users';

describe('Integration test for getApiRequest', () => {
  it('should return output with successful get request', async() => {
    const data = await getApiRequest(uri);
    console.log(JSON.stringify(data.body));
    expect(data).not.null;
  });

  it('should return 200 satus code with successful get request', async() => {
    const data = await getApiRequest(uri);
    expect(data.statusCode).to.equal(200);
  });

});
