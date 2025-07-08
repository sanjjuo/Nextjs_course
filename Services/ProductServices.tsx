import { createProduct, fetchProducts } from "@/Api_Services/fetchProducts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  });
};

export const useAddProducts = () => {
  return useMutation({
    mutationFn: (data: AddProduct) => createProduct(data),
  });
};
