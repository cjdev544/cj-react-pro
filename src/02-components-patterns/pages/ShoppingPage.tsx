import { ProductButtons, ProductImage, ProductTitle } from '..'
import ProductCard from '../components/ProductCard'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: '/coffee-mug.png',
}

export default function ShoppingPage() {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
