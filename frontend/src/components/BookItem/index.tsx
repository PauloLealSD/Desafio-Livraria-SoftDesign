import React from "react"
import { useNavigate } from "react-router-dom"
import { Book } from "../../types/types"
import styles from "./styles.module.scss"

export function BookItem({ book }: { book: Book }) {
  const navigateTo = useNavigate()

  function handleClick(id: number){
    navigateTo(`/book/${id}`)
  }

  return (
    <>
      <div onClick={()=>{handleClick(book.id)}} className={styles.container}>

        <img src={book.url} alt={book.title} />

        <div className={styles.infoContainer} >

          <h2>{book.title}</h2>

          <div className={styles.detail} >
            <h3>{book.author}</h3>
            <h3 className={book.availability ? "true" : styles.false} >{book.availability ? "Disponível" : "Indisponível"}</h3>
          </div>

        </div>

      </div>
    </>
  )
}