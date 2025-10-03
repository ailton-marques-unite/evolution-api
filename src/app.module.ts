import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstanceModule } from './instances/instance.module';
import { WebhookModule } from './webhook/webhook.module';
import { SendMessageModule } from './send-message/send-message.module';
import { ChatControllerModule } from './chat-controller/chat-controller.module';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { OpenAiModule } from './open-ai/open-ai.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    InstanceModule, 
    WebhookModule, 
    SendMessageModule, ChatControllerModule, ProfileSettingsModule, OpenAiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
