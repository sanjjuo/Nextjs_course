import ProductDetailsClient from '@/components/ProductDetailsClient/ProductDetailsClient';
import { fetchProductDetails } from '@/services/fetchProducts';

const ProductDetails = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
    const productDetails = await fetchProductDetails(productId);
    return <ProductDetailsClient productDetails={productDetails} />;
};

export default ProductDetails;
