import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GiroDto } from './dto/giro.dto';
import { Giros } from '../database/entities/giros.entity';
import { Repository } from 'typeorm';
import { OficinasService } from '../oficinas/oficinas.service';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class GirosService {
  constructor(
    @InjectRepository(Giros)
    private readonly girosRepository: Repository<Giros>,
    private readonly oficinasService: OficinasService,
  ) {}

  async create(createGiroDto: GiroDto): Promise<Giros> {
    await this.oficinasService.findOne(createGiroDto['girOficinaId']);
    const giro = this.girosRepository.create(createGiroDto);
    return await this.girosRepository.save(giro);
  }

  async findAll(): Promise<Giros[]> {
    return await this.girosRepository.find();
  }

  async findOne(id: string): Promise<Giros> {
    const giro = await this.girosRepository.findOneBy({ girGiroId: id });
    if (!giro) throw new NotFoundException(`Giro Not Found`);
    return giro;
  }

  async update(updateGiroDto: GiroDto): Promise<Giros> {
    const giro = await this.findOne(updateGiroDto.girGiroId);
    return this.girosRepository.save({
      ...giro,
      gitRecibo: updateGiroDto['gitRecibo'],
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.girosRepository.delete(id);
  }
}
