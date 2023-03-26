
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../context/MoviesContext';
import Loader from '../../molecules/Global/Loader';

import ListMovies from '../../molecules/Home/ListMovies';

export default function HomeOrganism() {


  const products = useContextSelector(MoviesContext, (context) => {
    return context.products
  });


  return (
    products.length === 0 ? <Loader/> : <ListMovies />
    // <p>{JSON.stringify(products)}</p>
  )
}
