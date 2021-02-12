import { TypingDNAReactiveClient } from "./main";

describe('TypingDNAReactiveClient', () => {
  it('constructor', () => {
    const  client = new TypingDNAReactiveClient('', '', '');
    expect(client).toBeTruthy();
  });
});
