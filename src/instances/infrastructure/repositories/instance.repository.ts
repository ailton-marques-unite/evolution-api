import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Instance } from '../../domain/entities/instance.entity';
import { CreateInstanceResponse } from '@/instances/application/dtos/responses/create-instance.response';
import { InstanceRepositoryInterface } from '../../domain/repositories/instance.repository.interface';
import { CreateInstanceDto } from '@/instances/application/dtos/create-instance.dto';

@Injectable()
export class InstanceRepository implements InstanceRepositoryInterface {
  private readonly baseUrl = `${process.env.EVOLUTION_URL}/instance`;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getAuthHeader(): { apikey: string } {
    const apikey = this.configService.get<string>('EVOLUTION_API_KEY');
    return { apikey: `${apikey}` };
  }

  async findByName(instanceName: string): Promise<Instance | null> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Instance>(`${this.baseUrl}/connect/${instanceName}`, {
          headers: this.getAuthHeader(),
        }),
      );
      return response.data;
    } catch (error: any) {
      if (error?.response?.status === 404) return null;
      throw error;
    }
  }

  async create(createInstanceDto: CreateInstanceDto): Promise<CreateInstanceResponse> {
    try {
      const response = await firstValueFrom(
        this.httpService.post<CreateInstanceResponse>(`${this.baseUrl}/create`, createInstanceDto, {
          headers: this.getAuthHeader(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
