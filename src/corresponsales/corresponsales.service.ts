import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Corresponsales } from 'src/database/entities';
import { Repository } from 'typeorm';
import { CorresponsaleDto } from './dto/corresponsales.dto';

@Injectable()
export class CorresponsalesService {
  constructor(
    @InjectRepository(Corresponsales)
    private readonly corresponsalesRepository: Repository<Corresponsales>,
  ) {}

  async create(corresponsaleDto: CorresponsaleDto): Promise<Corresponsales> {
    const correponsal = this.corresponsalesRepository.create(corresponsaleDto);
    return await this.corresponsalesRepository.save(correponsal);
  }

  async findAll() {
    return await this.corresponsalesRepository.find();
  }

  async findOne(id: string) {
    const corresponsal = await this.corresponsalesRepository.findOneBy({
      corCorresponsalId: id,
    });
    if (!corresponsal) throw new NotFoundException(`corresponsal not found`);
    return corresponsal;
  }

  async update(updateCorresponsaleDto: CorresponsaleDto) {
    const corresponsal = await this.findOne(
      updateCorresponsaleDto['corCorresponsalId'],
    );

    return this.corresponsalesRepository.save({
      ...corresponsal,
      corNombre: updateCorresponsaleDto['corNombre'],
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.corresponsalesRepository.delete(id);
  }
}
