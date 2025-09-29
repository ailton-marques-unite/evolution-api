import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { ConfigService } from '@nestjs/config';

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService;
  let mockGet: jest.Mock;

  beforeEach(async () => {
    mockGet = jest.fn((key: string) => {
      const map: Record<string, any> = {
        PORT: '3000',
        NODE_ENV: 'test',
      };
      return map[key];
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnvConfigService,
        {
          provide: ConfigService,
          useValue: { get: mockGet },
        },
      ],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('must to return variable PORT', () => {
    expect(sut.getAppPort()).toEqual(3000);
    expect(mockGet).toHaveBeenCalledWith('PORT');
  });

  it('must to return variable DEV_ENV', () => {
    expect(sut.getNodeEnv()).toEqual('test');
    expect(mockGet).toHaveBeenCalledWith('NODE_ENV');
  });
});
