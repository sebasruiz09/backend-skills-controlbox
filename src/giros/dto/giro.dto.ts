import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GiroDto {
  @IsString()
  @IsOptional()
  girGiroId?: string;

  @IsNumber()
  girRecibo: number;

  @IsString()
  @IsOptional()
  girOficinaId: string;
}
