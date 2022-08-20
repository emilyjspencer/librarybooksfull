/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 40 })
  title: string;

  @Column("varchar", { length: 30 })
  author: string;

  @Column("varchar", { length: 20 })
  genre: string;

  @Column("varchar", { length: 40 })
  isbn: string;

  @Column('boolean')
  fiction: boolean;
}
