import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'OFICINAS',
})
export class Oficinas {
  @PrimaryGeneratedColumn('uuid', {
    name: 'OFI_OFICINA_ID',
  })
  ofiOficinaId: string;

  @Column({
    name: 'OFI_NOMBRE',
    type: 'varchar',
    length: 80,
    unique: true,
  })
  ofiNombre: string;

  @Column({
    name: 'OFI_CORRESPONSAL_ID',
  })
  ofiCorresponsalId: string;
}
