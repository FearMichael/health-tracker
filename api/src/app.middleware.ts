import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { join } from 'path';

@Injectable()
export class ServeFrontend implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        // If it's an api request then continue to controller
        if (req.path.includes('api')) {
            return next();
        }
        // Otherise serve the frontend
        res.sendFile(join(process.cwd(), '../client/dist/index.html'));
    }
}