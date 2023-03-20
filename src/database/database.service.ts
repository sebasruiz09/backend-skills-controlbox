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
      type: 'mysql',
      url: this.configService.get<string>('URL'),
      entities: [Corresponsales, Giros, Oficinas],
      // synchronize: tre,
      autoLoadEntities: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
    return config;
  }
}
