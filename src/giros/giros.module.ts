import { Module } from '@nestjs/common';
import { GirosService } from './giros.service';
import { GirosController } from './giros.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Giros } from '../database/entities/giros.entity';
import { OficinasModule } from '../oficinas/oficinas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Giros]), OficinasModule],
  controllers: [GirosController],
  providers: [GirosService],
})
export class GirosModule {}
