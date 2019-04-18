import { RESPONSE_CODE } from '../config';

export class GenericError {
  public statusCode: number;
  public message: string;
  public data: any;
  constructor(statusCode = RESPONSE_CODE.INTERNAL_ERROR, message = '', data: any = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
