import { TypingDNAReactiveClient } from './main';

describe('TypingDNAReactiveClient', () => {
  let client: TypingDNAReactiveClient;

  const userId = 'aerabi';
  const typingPattern =
    '0,3.1,0,0,22,3482580928,0,-1,-1,0,-1,-1,5,116,23,2,173,118,2,184,71,1,0,0,1,3,1,902248182,1,1,0,0,0,1,1920,1080,2,0,88,0,946510664|4135,116|189,55|184,95|73,102|119,103|80,168|96,80|72,131|105,55|79,111|89,103|104,95|183,111|97,103|104,118|112,95|152,142|120,79|6,154|290,87|224,55|128,72';

  beforeAll(() => {
    const apiKey = process.env.TYPING_DNA_API_KEY || '';
    const apiSecret = process.env.TYPING_DNA_API_SECRET || '';
    client = new TypingDNAReactiveClient(apiKey, apiSecret);
    expect(client).toBeTruthy();
    expect(client['_client']).toBeTruthy();
  });

  it('auto', (done) => {
    client.auto(userId, typingPattern).subscribe((response) => {
      expect(response.messageCode).toEqual(2);
      expect(response.verification).toEqual(false);
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it('save', (done) => {
    client.save(userId, typingPattern).subscribe((response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it('verify', (done) => {
    client.verify(userId, typingPattern).subscribe((response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
