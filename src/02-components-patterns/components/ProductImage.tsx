import NoImage from '../assets/no-image.jpg'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

export function ProductImage() {
  const { product } = useProduct()

  return (
    <img
      className={styles.productImg}
      src={product.img ? product.img : NoImage}
      alt='CoffeeMug'
    />
  )
}
