import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstanceModule } from './instances/instance.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), InstanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
