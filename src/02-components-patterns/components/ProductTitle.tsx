import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

interface Props {
  className?: string
  title?: string
  style?: React.CSSProperties
}

export function ProductTitle({ title, className, style }: Props) {
  const { product } = useProduct()

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  )
}
