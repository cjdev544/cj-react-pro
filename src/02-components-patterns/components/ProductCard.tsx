import { createContext } from 'react'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import { type Product } from '../types.d'
import styles from '../styles/styles.module.css'

interface Props {
  children?: React.ReactNode
  product: Product
  className?: string
  style?: React.CSSProperties
}

interface ProductContextProps {
  product: Product
}

export const ProductContext = createContext({} as ProductContextProps)

export default function ProductCard({
  children,
  product,
  className,
  style,
}: Props) {
  return (
    <ProductContext.Provider
      value={{
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons
