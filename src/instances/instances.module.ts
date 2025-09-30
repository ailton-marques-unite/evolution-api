import { Module } from '@nestjs/common';
import { InstancesService } from './application/services/instances.service';
import { InstancesController } from './infrastructure/controllers/instances.controller';

@Module({
  controllers: [InstancesController],
  providers: [InstancesService],
})
export class InstancesModule {}
