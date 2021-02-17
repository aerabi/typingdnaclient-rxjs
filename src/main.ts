import { Observable, Subscriber } from 'rxjs';
import { AutoApiResponse, AutoResponse, toAutoResponse, toVerifyResponse, VerifyApiResponse, VerifyResponse } from './types';
import { map } from 'rxjs/operators';

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
      return new Observable<AutoApiResponse>((observer) => this._client.auto(userId, typingPattern, options, bindSubscriber(observer))).pipe(
        map(toAutoResponse),
      );
    }
    return new Observable<AutoApiResponse>((observer) => this._client.auto(userId, typingPattern, bindSubscriber(observer))).pipe(map(toAutoResponse));
  }

  public save(userId: string, typingPattern: string): Observable<any> {
    return new Observable((observer) => this._client.save(userId, typingPattern, bindSubscriber(observer)));
  }

  public verify(
    userId: string,
    typingPattern: string,
    quality = 2,
    options: { deviceSimilarityOnly: boolean } = { deviceSimilarityOnly: false },
  ): Observable<VerifyResponse> {
    return new Observable<VerifyApiResponse>((observer) => this._client.verify(userId, typingPattern, quality, options, bindSubscriber(observer))).pipe(
      map(toVerifyResponse),
    );
  }
}
