class HttpException extends Error {
  public status: number;
  public message: string;
  public innerError?: Error;

  constructor(status: number, message: string, innerError?: Error) {
    super(message);
    this.status = status;
    this.message = message;
    this.innerError = innerError;
  }
}

export default HttpException;
