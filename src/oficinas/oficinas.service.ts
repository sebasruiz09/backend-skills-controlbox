import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OficinaDto } from './dto/oficina.dto';
import { Oficinas } from '../database/entities/oficinas.entity';
import { Repository } from 'typeorm';
import { CorresponsalesService } from 'src/corresponsales/corresponsales.service';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class OficinasService {
  constructor(
    @InjectRepository(Oficinas)
    private readonly oficinasRepository: Repository<Oficinas>,
    private readonly corresponsalesService: CorresponsalesService,
  ) {}
  async create(createOficinaDto) {
    await this.corresponsalesService.findOne(
      createOficinaDto['ofiCorresponsal'],
    );
    const oficina = await this.oficinasRepository.save(createOficinaDto);
    return this.oficinasRepository.save(oficina);
  }

  findAll() {
    return this.oficinasRepository.find({});
  }

  async findOne(id: string) {
    const oficina = await this.oficinasRepository.findOneBy({
      ofiOficinaId: id,
    });
    if (!oficina) throw new NotFoundException(`oficina not found`);
    return oficina;
  }

  async update(updateOficinaDto: OficinaDto) {
    const oficina = await this.findOne(updateOficinaDto['ofiOficinaId']);
    return this.oficinasRepository.save({
      ...oficina,
      ofiNombre: updateOficinaDto['ofiNombre'],
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.oficinasRepository.delete(id);
  }
}
