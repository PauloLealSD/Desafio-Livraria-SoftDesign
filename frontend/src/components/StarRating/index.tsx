import React from "react"
import { FaStar } from "react-icons/fa"

export function StarRating({rating}: {rating: string}) {
  const array = new Array(parseInt(rating)).fill("")
 
  return (
    <div>
      {
        array.map((_, i)=>{
          return <FaStar key={i} color="f5be09" size="20px"/>
        })
      }
    </div>
  )
}