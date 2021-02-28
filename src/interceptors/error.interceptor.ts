import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExecutionContext, NestInterceptor, Injectable, CallHandler, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(catchError(err => this.handle(context, err)));
    }
    handle(context: any, err: any): Observable<never> {
        // const ctx: any = context.switchToHttp();
        // const request = ctx.getRequest();
        throw new InternalServerErrorException(err);
    }
}
