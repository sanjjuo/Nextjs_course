import Modal from "@/components/common/Modal/Modal";
import { fetchProductDetails } from "@/services/fetchProducts";
const InterceptedModal = async ({ params: { productId } }: { params: { productId: string } }) => {
    const id = await productId
    const productDetails: Product = await fetchProductDetails(id);
    return <Modal productDetails={productDetails}/>
}

export default InterceptedModal
