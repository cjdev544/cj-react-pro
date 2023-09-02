import NoImage from '../assets/no-image.jpg'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

interface Props {
  className?: string
  style?: React.CSSProperties
}

export function ProductImage({ className, style }: Props) {
  const { product } = useProduct()

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={product.img ? product.img : NoImage}
      alt='CoffeeMug'
    />
  )
}
