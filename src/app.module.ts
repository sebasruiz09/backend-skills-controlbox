import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CorresponsalesModule } from './corresponsales/corresponsales.module';
import { OficinasModule } from './oficinas/oficinas.module';
import { GirosModule } from './giros/giros.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    CorresponsalesModule,
    OficinasModule,
    GirosModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
