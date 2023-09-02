import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

interface Props {
  className?: string
  style?: React.CSSProperties
}

export function ProductButtons({ className, style }: Props) {
  const { increaseBy, counter } = useProduct()
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={`${styles.buttonMinus} ${className}`}
        style={style}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel} ${className}`} style={style}>
        {' '}
        {counter}{' '}
      </div>
      <button
        className={`${styles.buttonAdd} ${className}`}
        style={style}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  )
}
