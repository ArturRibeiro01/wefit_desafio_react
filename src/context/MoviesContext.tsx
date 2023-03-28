import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import produce from 'immer';
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios';
import { fetchLocalStorage, saveLocalStorage } from '../utils/localStorageSave';


interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ItemCart extends Products {
  quantity: number
}

interface ChangeItemCartQtdProps {
  itemId: number
  type: 'increase' | 'decrease'
}

interface MoviesContextType {
  products: Products[]
  getProducts: () => void

  inCartQuantity: number
  itemCart: ItemCart[]
  ItemsCartTotal: number //numero de itens no carrinho

  addProductToCart: (movie: ItemCart) => void
  changeCartItemQuantity: (value: ChangeItemCartQtdProps) => void
  cleanCart: () => void
  haveMovieInCart: (itemId: number) => number
  quantityMovieInStorage: (itemId: number) => number
  removeCartItem: (itemId: number) => void

}

interface MoviesProviderProps {
  children: ReactNode
}

export const MoviesContext = createContext({} as MoviesContextType)

export function MoviesProvider({ children }: MoviesProviderProps) {

  const [products, setProducts] = useState<Products[]>([]);
  const [itemCart, setItemCart] = useState<ItemCart[]>([]);

  let inCartQuantity = itemCart.length


  //Faz a requisição de todas os produtos
  const getProducts = useCallback( async () => {
    const response = await api.get('/products', {
      params: {},
    })

    setProducts(response.data)
  }, [])


  let ItemsCartTotal = useMemo(() => itemCart.reduce
    (
      (totalPrice, movie) => (totalPrice += movie.price * movie.quantity),
      0,
    ),[itemCart],
  )

  const haveMovieInCart = useCallback(
    (movieId: number) => itemCart.findIndex(({ id }) => id === movieId),
    [itemCart],
  )


  const addProductToCart = useCallback(
    (movie: ItemCart) => {
      const movieAlreadyExistsInCart = haveMovieInCart(movie.id)

      const newCart = produce(itemCart, (draft) => {
        if (movieAlreadyExistsInCart < 0) {
          draft.push(movie)
        } else {
          draft[movieAlreadyExistsInCart].quantity += movie.quantity
        }
      })

      setItemCart(newCart)
    },
    [itemCart, haveMovieInCart],
  )








  const changeCartItemQuantity = useCallback(
    ({ itemId, type }: ChangeItemCartQtdProps) => {
      const newCart = produce(itemCart, (draft) => {
        const movieAlreadyExistsInCart = haveMovieInCart(itemId)

        if (movieAlreadyExistsInCart >= 0) {
          const { quantity } = draft[movieAlreadyExistsInCart]

          if (type === 'decrease' && quantity <= 1) {
            draft.splice(movieAlreadyExistsInCart, 1)
            return
          }

          draft[movieAlreadyExistsInCart].quantity =
            type === 'increase' ? quantity + 1 : quantity - 1
        }
      })

      setItemCart(newCart)
    },
    [itemCart, haveMovieInCart],
  )










  // Remove um item do carrinho
  const removeCartItem = useCallback(
    (itemId: number) => {
      const newCart = produce(itemCart, (draft) => {
        const movieAlreadyExistsInCart = haveMovieInCart(itemId)

        if (movieAlreadyExistsInCart >= 0) {
          draft.splice(movieAlreadyExistsInCart, 1)
        }
      })
      setItemCart(newCart)
    },
    [itemCart, haveMovieInCart],
  )




  //Retorna a quantidade de itens no carrinho
  const quantityMovieInStorage = useCallback(
    (movieId: number) => {
      if (!itemCart || itemCart.length <= 0) return 0

      const movieAlreadyExistsInCart = haveMovieInCart(movieId)

      if (movieAlreadyExistsInCart < 0) return 0

      return itemCart[movieAlreadyExistsInCart]?.quantity
    },
    [itemCart, haveMovieInCart],
  )

  //
  //
  //
  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 0);
  }, [])

  //
  //
  //


  const cleanCart = useCallback(() => {
    setItemCart([])
    saveLocalStorage([])
  }, [])

  useEffect(() => {
    if (itemCart.length === 0) return

    saveLocalStorage(itemCart)
  }, [itemCart])

  useEffect(() => {
    const localitemCart = fetchLocalStorage()
    setItemCart(localitemCart)
  }, [])






  return (
      <MoviesContext.Provider
      value={{


        //usados
        products,
        getProducts,
        itemCart,//Itens no carrinho




        // Não usados



        inCartQuantity,
        ItemsCartTotal,
        haveMovieInCart,

        addProductToCart,
        changeCartItemQuantity,
        cleanCart,

        quantityMovieInStorage,
        removeCartItem,
      }}
      >
        {children}
      </MoviesContext.Provider>
  )

}
