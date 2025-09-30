import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstanceService } from '../../application/services/instance.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { CreateInstanceDto } from '../../application/dtos/create-instance.dto';
import { UpdateInstanceDto } from '../../application/dtos/update-instance.dto';

@Controller('instance')
@ApiTags('Instance')
export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The instance has been successfully created.',
  })
  create(@Body() createInstanceDto: CreateInstanceDto) {
    return this.instanceService.create();
  }

  @Get()
  @ApiResponse({ description: 'The instance has been successfully retrieved.' })
  findAll() {
    return this.instanceService.findAll();
  }

  @Get(':instanceName')
  @ApiOperation({ summary: 'Get an instance by name' })
  @ApiParam({ name: 'instanceName', description: 'The name of the instance' })
  @ApiResponse({ description: 'The instance has been successfully retrieved.' })
  findByName(@Param('instanceName') instanceName: string) {
    return this.instanceService.findByName(instanceName);
  }

  @Patch(':id')
  @ApiResponse({ description: 'The instance has been successfully updated.' })
  update(
    @Param('id') id: string,
    @Body() updateInstanceDto: UpdateInstanceDto,
  ) {
    return this.instanceService.update(+id, updateInstanceDto);
  }

  @Delete(':id')
  @ApiResponse({ description: 'The instance has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.instanceService.remove(+id);
  }
}
