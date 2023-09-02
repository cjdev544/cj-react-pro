import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

export function ProductTitle() {
  const { product } = useProduct()

  return <span className={styles.productDescription}>{product.title}</span>
}
