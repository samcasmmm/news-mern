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

//
type HttpException1 = (message: string) => {
  statusCode: number;
  message: string;
};

const createHttpException: (statusCode: number) => HttpException1 =
  (statusCode) => (message) => ({
    statusCode,
    message,
  });

export const NotFoundException: HttpException1 = createHttpException(404);
export const BadRequestException: HttpException1 = createHttpException(400);
export const UnauthorizedException: HttpException1 = createHttpException(401);
