import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Oficinas } from './oficinas.entity';

@Entity({
  name: 'GIROS',
})
export class Giros {
  @PrimaryGeneratedColumn('uuid', {
    name: 'GIR_GIRO_ID',
  })
  girGiroId: string;

  @Column({
    name: 'GIR_RECIBO',
    type: 'integer',
  })
  girRecibo: number;

  @ManyToOne(() => Oficinas, (Oficinas) => Oficinas.giros, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'GIR_OFICINA_ID',
  })
  girOficinaId: string;
}
