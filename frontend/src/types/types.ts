export type Book = {
   id: number,
   title: string,
   author: string,
   publisher: string,
   publication_year: string,
   availability: boolean,
   url: string,
   reviews: Review[]
}

export type Review = {
   id: number,
   title: string,
   comment: string,
   date: string,
   rating: string,
   book: Book
}