import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Review {

  @PrimaryGeneratedColumn()
    id: number

  @Column()
    rating: string

  @Column()
    title: string

  @Column()
    comment: string

  @Column()
    date: string

  @ManyToOne(() => Book, book => book.reviews)
    book: Book
}