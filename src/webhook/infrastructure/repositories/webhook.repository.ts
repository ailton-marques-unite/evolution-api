import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { FindWebhookResponse } from '../../application/dtos/responses/create-webhook.response';

@Injectable()
export class WebhookRepository {
  private readonly baseUrl = `${process.env.EVOLUTION_URL}/webhook`;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getAuthHeader(): { apikey: string } {
    const apikey = this.configService.get<string>('EVOLUTION_API_KEY');
    return { apikey: `${apikey}` };
  }

  async findByName(instanceName: string): Promise<FindWebhookResponse | null> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<FindWebhookResponse>(`${this.baseUrl}/find/${instanceName}`, {
          headers: this.getAuthHeader(),
        }),
      );
      return response.data;
    } catch (error: any) {
      if (error?.response?.status === 404) return null;
      throw error;
    }
  }
}
