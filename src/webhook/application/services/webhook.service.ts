import { Injectable, NotFoundException } from '@nestjs/common';
import { WebhookRepository } from '../../infrastructure/repositories/webhook.repository';

@Injectable()
export class WebhookService {
  constructor(private readonly webhookRepository: WebhookRepository) {}

  async findByName(instanceName: string) {
    const webhook = await this.webhookRepository.findByName(instanceName);
    if (!webhook) {
      throw new NotFoundException(`Webhook not found for instance: ${instanceName}`);
    }
    return webhook;
  }
}
