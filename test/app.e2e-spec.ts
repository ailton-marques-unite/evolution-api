import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { ConfigService } from '@nestjs/config';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ConfigService)
      .useValue({
        get: jest.fn((key: string) => {
          const config = {
            PORT: 3000,
            NODE_ENV: 'test',
          };
          return config[key];
        }),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/ (GET)', () => {
    it('should return "Health check: OK"', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect(/Health check: OK/);
    });

    it('should return 404 for non-existing route', () => {
      return request(app.getHttpServer()).get('/non-existing').expect(404);
    });
  });
});
