import ProductDetailsClient from '@/components/ProductDetailsClient/ProductDetailsClient';
import { fetchProductDetails } from '@/services/fetchProducts';

const ProductDetails = async ({ params: { productId } }: { params: { productId: string } }) => {
  const ProdId = await productId;
  const productDetails = await fetchProductDetails(ProdId);
  return <ProductDetailsClient productDetails={productDetails} />;
};

export default ProductDetails;
