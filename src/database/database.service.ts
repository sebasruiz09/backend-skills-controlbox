import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { Corresponsales, Giros, Oficinas } from './entities';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const config: TypeOrmModuleOptions = {
      type: 'postgres',
      host: this.configService.get<string>('HOST'),
      port: +this.configService.get<string>('PORT'),
      database: this.configService.get<string>('DBNAME'),
      username: this.configService.get<string>('DBUSER'),
      password: this.configService.get<string>('DBPASSWORD'),
      synchronize: true,
      entities: [Corresponsales, Giros, Oficinas],
      autoLoadEntities: true,
    };
    return config;
  }
}
