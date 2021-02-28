import { ArgumentsHost, Catch, ExceptionFilter, HttpException, ExecutionContext } from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseService } from '../modules/shared/service/response.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        let res = new ResponseService();
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const next = ctx.getNext<ExecutionContext>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const err: any = exception.getResponse();
        const errMsg: string = err.status == 400 ? err.response.message[0] : err.message != undefined ? err.message : err;
        res.errorResponse(err.status != undefined ? err.status : status, errMsg, response);
    }
}
