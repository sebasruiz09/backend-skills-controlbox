import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CorresponsalesService } from './corresponsales.service';
import { CorresponsaleDto } from './dto/corresponsales.dto';
import { Corresponsales } from 'src/database/entities';

@Controller('corresponsales')
export class CorresponsalesController {
  constructor(private readonly corresponsalesService: CorresponsalesService) {}

  @Post()
  create(@Body() corresponsaleDto: CorresponsaleDto): Promise<Corresponsales> {
    return this.corresponsalesService.create(corresponsaleDto);
  }

  @Get()
  findAll(): Promise<Corresponsales[]> {
    return this.corresponsalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corresponsalesService.findOne(id);
  }

  @Patch()
  update(@Body() updateCorresponsaleDto: CorresponsaleDto) {
    return this.corresponsalesService.update(updateCorresponsaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corresponsalesService.remove(id);
  }
}
