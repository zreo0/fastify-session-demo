import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req, res, next: () => void) {
    const count = req.session?.get('count');
    console.log('###count###', count); // undefined
    console.log('###req.session###', req.session); // undefined
    next();
    return;
  }
}
