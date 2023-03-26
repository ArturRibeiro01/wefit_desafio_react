
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../context/MoviesContext';

export default function HomeOrganism() {


  const products = useContextSelector(MoviesContext, (context) => {
    return context.products
  });


  return (


    <p>{JSON.stringify(products)}</p>
  )
}
