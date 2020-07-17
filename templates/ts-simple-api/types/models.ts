
export interface IResponsePayload {
  statusCode: number;
  headers: {};
  body: string;
  isBase64Encoded: boolean;
}

export interface IQueryParameters {
  foo: string;
}

export interface IEventPayload {
  method: string;
  query: IQueryParameters;
}

export interface ICallback {
  (error: any, result: IResponsePayload): void;
}