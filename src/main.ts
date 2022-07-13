import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import fastifySession from 'fastify-session';
// import fastifyCookie from '@fastify/cookie';
import secureSession from '@fastify/secure-session';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const adapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
  );
  await app.register(secureSession, {
    secret: 'averylogphrasebiggerthanthirtytwochars',
    salt: 'mq9hDxBVDbspDR6n',
  });

  await app.listen(3000);
}
bootstrap();
