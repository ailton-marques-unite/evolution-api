import { Instance } from '../../domain/entities/instance.entity';

export interface InstanceServiceInterface {
  findByName(instanceName: string): Promise<Instance | null>;
}
