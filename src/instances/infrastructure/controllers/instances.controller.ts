import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstancesService } from '../../application/services/instances.service';
import { CreateInstanceDto } from '../../application/dtos/create-instance.dto';
import { UpdateInstanceDto } from '../../application/dtos/update-instance.dto';

@Controller('instances')
export class InstancesController {
  constructor(private readonly instancesService: InstancesService) {}

  @Post()
  create(@Body() createInstanceDto: CreateInstanceDto) {
    return this.instancesService.create(createInstanceDto);
  }

  @Get()
  findAll() {
    return this.instancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstanceDto: UpdateInstanceDto) {
    return this.instancesService.update(+id, updateInstanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instancesService.remove(+id);
  }
}
