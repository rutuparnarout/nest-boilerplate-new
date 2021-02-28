import { Injectable, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ResponseDto } from '../dto/response.dto';

@Injectable()
export class ResponseService {
    errorResponse(status: number, message: string, res: Response) {
        const errorDto: ResponseDto = {
            status: status,
            message: message,
            data: null,
            type: 'FAILURE'
        };
        return res.status(status).json(errorDto);
    }

    successResponse(status: number, message: string, data: any, res: Response, headers?: any) {
        const responseDto: ResponseDto = {
            status: status,
            message: message,
            data: data,
            type: 'SUCCESS'
        };

        if (headers) {
            res.set(headers);
        }
        return res.status(status).json(responseDto);
    }
}
