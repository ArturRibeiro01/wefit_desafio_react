
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios';


interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
  inCart?: boolean | undefined | null

}

interface MoviesContextType {
  products: Products[]
  getProducts: () => void
}

interface MoviesProviderProps {
  children: ReactNode
}


export const MoviesContext = createContext({} as MoviesContextType)

export function MoviesProvider({ children }: MoviesProviderProps) {

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 0);

  }, [])



  //Faz a requisição de todas os produtos
  const getProducts = useCallback( async () => {
    const response = await api.get('/products', {
      params: {},
    })

    setProducts(response.data)
  }, [])



  return (
      <MoviesContext.Provider
      value={{products, getProducts }}
      >
        {children}
      </MoviesContext.Provider>
  )

}
