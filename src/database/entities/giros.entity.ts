import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    type: 'varchar',
    length: 80,
    unique: true,
  })
  gitRecibo: string;

  @Column({
    name: 'GIR_OFICINA_ID',
    type: 'varchar',
  })
  girOficinaId: string;
}
