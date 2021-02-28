import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseService } from '../modules/shared/service/response.service';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        let res = new ResponseService();
        let ctx = context.switchToHttp();
        let response = ctx.getResponse();
        return next.handle().pipe(
            map(resObj => {
                res.successResponse(response.statusCode, resObj.message, resObj.data, response, resObj.headers ?? resObj.headers);
            })
        );
    }
}
