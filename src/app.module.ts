import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstanceModule } from './instances/instance.module';
import { WebhookModule } from './webhook/webhook.module';
import { SendMessageModule } from './send-message/send-message.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    InstanceModule, 
    WebhookModule, 
    SendMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
