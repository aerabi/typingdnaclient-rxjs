export interface AutoApiResponse {
  message: string;
  messageCode: number;
  statusCode: number;
  action: string;
  enrollment: number;
  result?: number;
  highConfidence?: number;
  customField?: string;
}

export interface AutoResponse {
  message: string;
  messageCode: number;
  statusCode: number;
  action: string;
  enrollment: boolean;
  verification: boolean;
  result: boolean;
  highConfidence: boolean;
  customField?: string;
}

export function toAutoResponse(res: AutoApiResponse): AutoResponse {
  return {
    message: res.message,
    messageCode: res.messageCode,
    statusCode: res.statusCode,
    action: res.action,
    enrollment: res.enrollment === 1,
    verification: !!res?.action?.includes('verify'),
    result: res.result === 1,
    highConfidence: res.highConfidence === 1,
    customField: res.customField,
  };
}

export interface VerifyApiResponse {
  message: string;
  messageCode?: string;
  success: number;
  result: number;
  score: number;
  confidenceInterval?: number;
  confidence?: number;
  netScore?: number;
  deviceSimilarity?: number;
  positions?: number[];
  comparedSamples?: number;
  previousSamples?: number;
  statusCode: number;
}

export interface VerifyResponse {
  message: string;
  messageCode?: string;
  success: boolean;
  result: boolean;
  score: number;
  confidenceInterval?: number;
  confidence?: number;
  netScore?: number;
  deviceSimilarity?: number;
  positions?: number[];
  comparedSamples?: number;
  previousSamples?: number;
  statusCode: number;
}

export function toVerifyResponse(res: VerifyApiResponse): VerifyResponse {
  console.log(res);
  return {
    message: res.message,
    messageCode: res.messageCode,
    success: res.success === 1,
    result: res.result === 1,
    score: res.score,
    confidenceInterval: res.confidenceInterval,
    confidence: res.confidence,
    netScore: res.netScore,
    deviceSimilarity: res.deviceSimilarity,
    positions: res.positions,
    comparedSamples: res.comparedSamples,
    previousSamples: res.previousSamples,
    statusCode: res.statusCode,
  };
}
