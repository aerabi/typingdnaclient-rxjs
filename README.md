# typingdnaclient-rxjs
RxJS wrapper for the TypingDna API

[![npm](https://img.shields.io/npm/v/typingdnaclient-rxjs)](https://www.npmjs.com/package/typingdnaclient)

## Installation
```bash
npm install typingdnaclient-rxjs --save
```

## Instantiation and Usage
```typescript
import { TypingDNAReactiveClient } from 'typingdnaclient-rxjs';

const client = new TypingDNAReactiveClient(apiKey, apiSecret);
client.verify(userId, pattern).subscribe(console.log, console.error);
```

The default TypingDNA API Server is `api.typingdna.com`.
You can use the alternative server `tdna-api.azurewebsites.net`.
```typescript
const server = 'tdna-api.azurewebsites.net';
const client = new TypingDNAReactiveClient(apiKey, apiSecret, server);
```

## Available Methods
```typescript
class TypingDNAReactiveClient {
  auto(userId: string, typingPattern: string, options?: { customField: any }): Observable<any>;
  save(userId: string, typingPattern: string): Observable<any>;
  verify(userId: string, typingPattern: string, quality: number, options: { deviceSimilarityOnly: boolean }): Observable<any>;
}
```
