import PageHeader from "@/components/common/PageHeader/PageHeader";
import Products from "@/components/Products/Products";

const ProductList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="space-y-20">
      <div>
        <PageHeader header="Trending Products" />
        <Products type="trending-products" />
      </div>
      <div>
        <PageHeader header="Latest Products" />
        <Products type="latest-products" />
      </div>
      <div>
        <PageHeader header="Featured Products" />
        <Products type="featured-products" />
      </div>
    </div>
  );
};

export default ProductList;
