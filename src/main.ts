// @ts-ignore
import { TypingDNAClient } from 'typingdnaclient';

export class TypingDNAReactiveClient {
  private readonly _client: TypingDNAClient;
  constructor(private apiKey: string, private apiSecret: string, private apiServer: string) {
    this._client = new TypingDNAClient(apiKey, apiSecret, apiServer);
  }
}
