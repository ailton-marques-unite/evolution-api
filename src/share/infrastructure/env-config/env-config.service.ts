import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    return Number(value: this.configService.get<number>(propertyPath: 'PORT'));
  }

  getNodeEnv(): string {
    return this.configService.get<string>(propertyPath: 'NODE_ENV');
  }
}
