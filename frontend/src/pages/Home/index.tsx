import React, { useEffect, useState } from "react"
import { BookItem } from "../../components/BookItem"
import { api } from "../../services/api"
import styles from "./styles.module.scss"
import { Book } from "../../types/types"

export function Home() {
  const [bookList, setBookList] = useState<Book[]>([])

  useEffect(() => {
    api.get<Book[]>("/").then((response)=>{
      setBookList(response.data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1>Lista de livros</h1>
      {bookList.map((value) => {
        return <BookItem key={value.id} book={value} />
      })}
    </div>
  )
}