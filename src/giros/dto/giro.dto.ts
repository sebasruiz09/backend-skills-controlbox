import { IsOptional, IsString } from 'class-validator';

export class GiroDto {
  @IsString()
  @IsOptional()
  girGiroId?: string;

  @IsString()
  gitRecibo: string;

  @IsString()
  @IsOptional()
  girOficinaId: string;
}
