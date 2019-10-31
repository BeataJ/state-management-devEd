import React, { useState } from 'react'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2566124
    },
    {
      name: 'Inception',
      price: '$10',
      id: 23524
    }
  ])

  return (
    <div>
      
    </div>
  )
}

export default MovieList
