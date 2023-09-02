import { useContext, useState } from 'react'
import { ProductContext } from '../components/ProductCard'

export default function useProduct() {
  const { product } = useContext(ProductContext)
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0))
  }

  return {
    product,
    counter,
    increaseBy,
  }
}
