import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookService } from '../../application/services/webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('/set/:instanceName')

  @Get('/find/:instanceName')
  findByName(@Param('instanceName') instanceName: string) {
    return this.webhookService.findByName(instanceName);
  }
}
