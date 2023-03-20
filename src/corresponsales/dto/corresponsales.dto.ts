import { IsOptional, IsString } from 'class-validator';

export class CorresponsaleDto {
  @IsString()
  @IsOptional()
  corCorresponsalId: string;

  @IsString()
  corNombre: string;
}
