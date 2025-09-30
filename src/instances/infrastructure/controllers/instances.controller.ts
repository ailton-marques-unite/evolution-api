import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstancesService } from '../../application/services/instances.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateInstanceDto } from '../../application/dtos/create-instance.dto';
import { UpdateInstanceDto } from '../../application/dtos/update-instance.dto';

@Controller('instances')
@ApiTags('Instances')
export class InstancesController {
  constructor(private readonly instancesService: InstancesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The instance has been successfully created.' })
  create(@Body() createInstanceDto: CreateInstanceDto) {
    return this.instancesService.create(createInstanceDto);
  }

  @Get()
  @ApiOkResponse({ description: 'The instances have been successfully retrieved.' })
  findAll() {
    return this.instancesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The instance has been successfully retrieved.' })
  findOne(@Param('id') id: string) {
    return this.instancesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The instance has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateInstanceDto: UpdateInstanceDto) {
    return this.instancesService.update(+id, updateInstanceDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The instance has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.instancesService.remove(+id);
  }
}
