import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  ExceptionFilter,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const adjustedStatus =
      status === HttpStatus.INTERNAL_SERVER_ERROR
        ? HttpStatus.BAD_REQUEST
        : status;

    console.log(exception);

    response.status(adjustedStatus).json({
      statusCode: adjustedStatus,
      timestamp: new Date().toISOString(),
      path: request.url,
      exception: exception.driverError?.sqlMessage ?? 'error inesperado',
    });
  }
}
