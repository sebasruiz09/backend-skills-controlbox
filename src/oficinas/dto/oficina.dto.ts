import { IsOptional, IsString } from 'class-validator';
export class OficinaDto {
  @IsString()
  @IsOptional()
  ofiOficinaId?: string;

  @IsString()
  ofiNombre: string;

  @IsString()
  @IsOptional()
  ofiCorresponsalId?: string;
}
