import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'CORRESPONSALES',
})
export class Corresponsales {
  @PrimaryGeneratedColumn('uuid', {
    name: 'COR_CORRESPONSAL_ID',
  })
  corCorresponsalId: string;

  @Column({
    name: 'COR_NOMBRE',
    type: 'varchar',
    length: 80,
    unique: true,
  })
  corNombre: string;
}
