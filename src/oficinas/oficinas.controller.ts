import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { OficinaDto } from './dto/oficina.dto';

@Controller('oficinas')
export class OficinasController {
  constructor(private readonly oficinasService: OficinasService) {}

  @Post()
  create(@Body() createOficinaDto: OficinaDto) {
    return this.oficinasService.create(createOficinaDto);
  }

  @Get()
  findAll() {
    return this.oficinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oficinasService.findOne(id);
  }

  @Patch()
  update(@Body() updateOficinaDto: OficinaDto) {
    return this.oficinasService.update(updateOficinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oficinasService.remove(id);
  }
}
