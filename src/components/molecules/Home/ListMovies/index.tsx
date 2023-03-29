import React from 'react'
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../../context/MoviesContext';
import Card from '../../../atoms/Home/Card';
import { ListMoviesContainer } from './styles'

export default function ListMovies() {


  const products = useContextSelector(MoviesContext, (context) => {
    return context.products
  });

  const qtdinCart = useContextSelector(MoviesContext, (context) => {
    return context.quantityMovieInStorage
  });

  return (
    <ListMoviesContainer>
      { products.map(card => (
        <div key={card.id}>
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            product={card}
            qtdinCart ={qtdinCart(card.id)}
          />
        </div>
      ))}
    </ListMoviesContainer>
  )
}
