import { Module } from '@nestjs/common';
import { CorresponsalesService } from './corresponsales.service';
import { CorresponsalesController } from './corresponsales.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Corresponsales } from '../database/entities/corresponsales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Corresponsales])],
  controllers: [CorresponsalesController],
  providers: [CorresponsalesService],
  exports: [CorresponsalesService],
})
export class CorresponsalesModule {}
