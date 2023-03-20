import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Oficinas } from './oficinas.entity';

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

  @OneToMany(() => Oficinas, (Oficinas) => Oficinas.ofiCorresponsalId)
  oficinas: Oficinas[];
}
