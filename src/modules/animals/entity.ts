import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

export enum AnimalType {
  DOG = 'DOG',
  CAT = 'CAT'
}

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column()
  name: string

  @Column({
    type: 'varchar',
    enum: AnimalType,
    default: AnimalType.DOG
  })
  type: AnimalType;
  
  @Column()
  unit: number;

  @Column()
  race: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
