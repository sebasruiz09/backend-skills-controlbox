import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GirosService } from './giros.service';
import { GiroDto } from './dto/giro.dto';
import { Giros } from 'src/database/entities';

@Controller('giros')
export class GirosController {
  constructor(private readonly girosService: GirosService) {}

  @Post()
  create(@Body() createGiroDto: GiroDto) {
    return this.girosService.create(createGiroDto);
  }

  @Get()
  findAll(): Promise<Giros[]> {
    return this.girosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Giros> {
    return this.girosService.findOne(id);
  }

  @Patch()
  update(@Body() updateGiroDto: GiroDto): Promise<Giros> {
    return this.girosService.update(updateGiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.girosService.remove(id);
  }
}
