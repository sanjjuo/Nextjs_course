import ProductDetailsClient from "@/components/ProductDetailsClient/ProductDetailsClient";
import { fetchProductDetails } from "@/Api_Services/fetchProducts";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const ProdId = await params;
  const productDetails = await fetchProductDetails(ProdId.productId);
  return <ProductDetailsClient productDetails={productDetails} />;
};

export default ProductDetails;
