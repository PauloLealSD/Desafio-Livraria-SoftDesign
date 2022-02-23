import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Review } from "./Review"

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
    id: number

  @Column()
    title: string

  @Column()
    author: string

  @Column()
    publication_year: string

  @Column()
    publisher: string

  @Column()
    availability: boolean

  @Column()
    url: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @OneToMany(() => Review, review => review.book)
    reviews: Review[]
}