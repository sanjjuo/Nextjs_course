import Products from '@/components/Products/Products';
import { fetchProducts } from '@/services/fetchProducts';

const ProductList = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const products = await fetchProducts();
  return <Products products={products} />;
};


export default ProductList;
