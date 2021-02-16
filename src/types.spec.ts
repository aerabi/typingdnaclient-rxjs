import { toAutoResponse } from './types';

describe('AutoResponse', () => {
  it('toAutoResponse successful', (done) => {
    const successfulApiResponse = {
      message: 'Done',
      messageCode: 1,
      statusCode: 200,
      action: 'verify;enroll',
      enrollment: 1,
      result: 1,
      highConfidence: 1,
    };
    const autoResponse = toAutoResponse(successfulApiResponse);
    expect(autoResponse.message).toEqual(successfulApiResponse.message);
    expect(autoResponse.enrollment).toEqual(true);
    expect(autoResponse.verification).toEqual(true);
    expect(autoResponse.result).toEqual(true);
    expect(autoResponse.highConfidence).toEqual(true);
    done();
  });

  it('toAutoResponse enrollment needed', (done) => {
    const successfulApiResponse = {
      message: 'Pattern(s) enrolled. Not enough patterns for verification.',
      messageCode: 10,
      statusCode: 200,
      action: 'enroll',
      enrollment: 1,
    };
    const autoResponse = toAutoResponse(successfulApiResponse);
    expect(autoResponse.message).toEqual(successfulApiResponse.message);
    expect(autoResponse.enrollment).toEqual(true);
    expect(autoResponse.verification).toEqual(false);
    expect(autoResponse.result).toEqual(false);
    expect(autoResponse.highConfidence).toEqual(false);
    done();
  });
});
