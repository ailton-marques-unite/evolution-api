import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInstanceDto {
  @ApiProperty({ description: 'The id of the instance' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'The name of the instance' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
