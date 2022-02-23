import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Book } from "../../types/types"
import styles from "./styles.module.scss"
import { StarRating } from "../../components/StarRating"

export function Info() {
  const [book, setBook] = useState<Book>()
  const { id } = useParams()
  const navigateTo = useNavigate()

  function handleClick() {
    navigateTo("/")
  }

  useEffect(() => {
    api.get<Book>(`/book/${id}`).then((response)=>{
      setBook(response.data)
    })
  }, [])

  return (
    <div className={styles.container} >
      <header>
        <h1>Detalhes do livro</h1>
        <a onClick={()=>{ handleClick() }} >Voltar</a>
      </header>
      <main className={styles.detailsContainer}>
        <img src={book?.url} alt="" />

        <h2>{book?.title}</h2>

        <h3>{book?.author}</h3>
        <h4>{book?.publication_year}</h4>

        <strong>{book?.publisher}</strong>
        <span>{book?.availability ? "Disponível" : "Indisponível"}</span>

        <p className={styles.autor} >Escrito por:</p>
        <p className={styles.editora} >Editora:</p>
        <p className={styles.year} >Lançamento:</p>
        <p className={styles.available} >Situação:</p>

      </main>
    
      <h1>Avaliações: </h1>
      <section className={styles.reviewsContainer} >
        <ul>
          {
            book?.reviews.map((review) => {
              return (
                <li key={review.id}>
                  <div>
                    <h3>Avaliado em: {review.date}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <h2>{review.title}</h2>
                  <p>{review.comment}</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  )
}