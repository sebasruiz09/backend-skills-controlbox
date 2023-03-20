import { Module } from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { OficinasController } from './oficinas.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Oficinas } from '../database/entities/oficinas.entity';
import { CorresponsalesModule } from '../corresponsales/corresponsales.module';

@Module({
  imports: [CorresponsalesModule, TypeOrmModule.forFeature([Oficinas])],
  controllers: [OficinasController],
  providers: [OficinasService],
  exports: [OficinasService],
})
export class OficinasModule {}
