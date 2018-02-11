import chai from 'chai';
import Errors from './index';

describe('test', function () {

  it('add error object', () => {

    const error = new Errors();
    error.add('test', 'エラーのテストです');
    chai.expect(error.get('test')[0]).to.equal('エラーのテストです');

  });

  it('add error object in constructor', () => {
    const error = new Errors({
      'test': [ 'エラーのテストです' ]
    });
    chai.expect(error.get('test')[0]).to.equal('エラーのテストです');
  });

});