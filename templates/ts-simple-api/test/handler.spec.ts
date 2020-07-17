import { expect } from 'chai';
import sinon from 'sinon';
const getApiRequest = require('../src/lib/getApiRequest');
const { example } = require('../src/handler');

const successResponse = {
  statusCode: 200,
  body: {message:'success'}
};

const unsuccessfulResponse = {
  statusCode: 400,
  body: {}
};

describe('Testing handler()', function(){

  afterEach(function(){
    getApiRequest.getApiRequest.restore();
  });

  it('Should return the correct response when API call is successful', function(done: any){

    sinon.stub(getApiRequest, 'getApiRequest').resolves(successResponse);
    example(null, null, (err, response) => {
      expect(response).to.deep.equal(
        {
          'statusCode': 200,
          'headers': {},
          'body': JSON.stringify(successResponse.body),
          'isBase64Encoded': false
        }
      );
      done();
    }).catch(done);

  });

  it('Should return the correct response when API call is not successful', function(done: any){

    sinon.stub(getApiRequest, 'getApiRequest').resolves(unsuccessfulResponse);
    example(null, null, (err, response) => {
      expect(response).to.deep.equal(
        {
          'statusCode': 400,
          'headers': {},
          'body': JSON.stringify(unsuccessfulResponse.body),
          'isBase64Encoded': false
        }
      );
      done();
    }).catch(done);

  });

  it('Should return the correct response when getApiRequest() errors', function(done: any){

    sinon.stub(getApiRequest, 'getApiRequest').resolves('error');
    example(null, null, (err, response) => {
      expect(response).to.deep.equal(
        {
          'statusCode': 404,
          'headers': {},
          'body': 'error',
          'isBase64Encoded': false
        }
      );
      done();
    }).catch(done);

  });

  it('Should return the correct response when getApiRequest() returns neither object nor string', function(done: any){

    sinon.stub(getApiRequest, 'getApiRequest').resolves(false);
    example(null, null, (err, response) => {
      expect(response).to.deep.equal(
        {
          'statusCode': 404,
          'headers': {},
          'body': null,
          'isBase64Encoded': false
        }
      );
      done();
    }).catch(done);

  });

});