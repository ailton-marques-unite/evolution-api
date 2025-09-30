import { IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
export class Instance {
  @IsString()
  @IsNotEmpty()
  instanceName: string;

  @IsString()
  @IsNotEmpty()
  instanceType: string;
}
