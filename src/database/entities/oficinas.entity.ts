import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Corresponsales } from './corresponsales.entity';
import { Giros } from './giros.entity';

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

  @ManyToOne(
    () => Corresponsales,
    (corresponsales) => corresponsales.oficinas,
    {
      eager: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({
    name: 'OFI_CORRESPONSAL_ID',
  })
  ofiCorresponsalId: Corresponsales;

  @OneToMany(() => Giros, (Giros) => Giros.girOficinaId)
  giros: Giros[] | any;
}
