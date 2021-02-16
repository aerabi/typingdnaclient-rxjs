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
    verification: res.action.includes('verify'),
    result: res.result === 1,
    highConfidence: res.highConfidence === 1,
    customField: res.customField,
  };
}
