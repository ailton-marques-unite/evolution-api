import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstanceDto } from '../dtos/create-instance.dto';
import { UpdateInstanceDto } from '../dtos/update-instance.dto';
import { Instance } from '../../domain/entities/instance.entity';
import { InstanceRepository } from '../../infrastructure/repositories/instance.repository';
import { InstanceServiceInterface } from './instance.service.interface';

@Injectable()
export class InstanceService implements InstanceServiceInterface {
  constructor(private readonly instanceRepository: InstanceRepository) {}

  create() {
    return 'This action adds a new instance';
  }

  findAll() {
    return `This action returns all instances`;
  }

  async findByName(instanceName: string): Promise<Instance> {
    const instance = await this.instanceRepository.findByName(instanceName);
    if (!instance) {
      throw new NotFoundException('Instance not found');
    }
    return instance;
  }

  update(id: number, updateInstanceDto: UpdateInstanceDto) {
    return `This action updates a #${id} instance`;
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
