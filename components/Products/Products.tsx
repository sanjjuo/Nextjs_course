"use client";

import { useFetchProducts } from "@/Services/ProductServices";
import { motion } from "framer-motion";
import Loading from "../common/Loading/Loading";
import { Button } from "../ui/button";
import React from "react";
import { Link } from "@/i18n/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const Products = ({ type }: { type: string }) => {
  const { data, isPending, isError, isLoading } = useFetchProducts();
  const [showAll, setShowAll] = React.useState(false);

  if (isPending || isError || isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-5">
        <Loading />
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  const getProductsToDisplay = () => {
    if (!data) return [];

    if (showAll) return data;

    switch (type) {
      case "trending-products":
        return data.slice(0, 5);
      case "latest-products":
        return data.slice(6, 11);
      case "featured-products":
        return data.slice(12, 17);
      default:
        return data;
    }
  };

  const productsToShow = getProductsToDisplay();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
      {productsToShow.map((product: Product) => (
        <motion.div
          key={product.id}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-lg h-[200px] lg:h-[300px]">
            <Link href={`/products/${product.id}`}>
              {product.images?.[0] ? (
                <img
                  src={product.images?.[0] || "/no-image.png"}
                  alt={product.title}
                  width={10}
                  height={30}
                  className="rounded-lg hover:scale-110 h-[200px] lg:h-[300px] w-full object-cover duration-300"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </Link>
          </div>
          <div className="mt-2">
            <h6 className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap w-full lg:w-56 text-sm lg:text-base">
                {product.title}
              </span>
              <span>${product.price}</span>
            </h6>
          </div>
        </motion.div>
      ))}

      <div className="col-span-full flex items-center justify-center">
        {!showAll ? (
          <Button
            variant="outline"
            className="rounded-full w-20 shadow-none cursor-pointer"
            onClick={() => setShowAll(true)}
          >
            View all
          </Button>
        ) : (
          <Button
            variant="outline"
            className="rounded-full w-20 shadow-none cursor-pointer"
            onClick={() => setShowAll(false)}
          >
            View less
          </Button>
        )}
      </div>
    </div>
  );
};

export default Products;
