import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

export function ProductButtons() {
  const { increaseBy, counter } = useProduct()
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  )
}
