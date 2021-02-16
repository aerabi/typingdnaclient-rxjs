import { Observable, Subscriber } from 'rxjs';
import { AutoResponse } from './types';

function bindSubscriber(subscriber: Subscriber<any>) {
  return (error: any, response: any) => {
    if (error) {
      subscriber.error(error);
    } else {
      subscriber.next(response);
    }
    subscriber.complete();
  };
}

export class TypingDNAReactiveClient {
  private readonly _client: any;
  constructor(private apiKey: string, private apiSecret: string, private apiServer: string = 'api.typingdna.com') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TypingDNAClient = require('typingdnaclient');
    this._client = new TypingDNAClient(apiKey, apiSecret, apiServer);
  }

  public auto(userId: string, typingPattern: string, options?: { customField: any }): Observable<AutoResponse> {
    if (options) {
      return new Observable((observer) => this._client.auto(userId, typingPattern, options, bindSubscriber(observer)));
    }
    return new Observable((observer) => this._client.auto(userId, typingPattern, bindSubscriber(observer)));
  }

  public save(userId: string, typingPattern: string): Observable<any> {
    return new Observable((observer) => this._client.save(userId, typingPattern, bindSubscriber(observer)));
  }

  public verify(
    userId: string,
    typingPattern: string,
    quality = 2,
    options: { deviceSimilarityOnly: boolean } = { deviceSimilarityOnly: false },
  ): Observable<any> {
    return new Observable((observer) => this._client.verify(userId, typingPattern, quality, options, bindSubscriber(observer)));
  }
}
