import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './share/infrastructure/env-config/env-config.module';
import { InstancesModule } from './instances/instances.module';

@Module({
  imports: [EnvConfigModule, InstancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
