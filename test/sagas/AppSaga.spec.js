import { expectSaga } from 'redux-saga-test-plan';
import AppSaga from '@redux/AppSaga';

describe('app', () => {
  it('should have the expected watchers', done =>
    expectSaga(AppSaga)
      .run({ silenceTimeout: true })
      .then(saga => {
        expect(saga).toMatchSnapshot();
        done();
      }));
});
