import Modal from "@/components/common/Modal/Modal";
import { fetchProductDetails } from "@/Api_Services/fetchProducts";

const InterceptedModal = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const productDetails: Product = await fetchProductDetails(productId);
  return <Modal productDetails={productDetails} />;
};

export default InterceptedModal;
