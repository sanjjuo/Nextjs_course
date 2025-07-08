"use client";
import { useAddProducts } from "@/Services/ProductServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useRouter } from "@/i18n/navigation";

export const ErrorComponent = ({
  message,
}: {
  message: string | undefined | number;
}) => {
  return <p className="text-red-500 text-sm">{message}</p>;
};

const AddProductComponent = () => {
  const router = useRouter();
  const addProductSchema = z.object({
    title: z.string().min(1, { message: "Product name is required" }),
    price: z
      .string()
      .min(1, { message: "Product price is required" })
      .or(z.number()),
    description: z
      .string()
      .min(1, { message: "Product description is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
    },
  });
  const { mutate } = useAddProducts();

  const handleAddproduct = (data: AddProduct) => {
    const productWithImage = {
      ...data,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/400",
        "https://picsum.photos/200/500",
      ],
      categoryId: 1,
    };
    console.log(productWithImage);
    mutate(productWithImage, {
      onSuccess: () => {
        toast.success("Product is added");
        router.push("/products");
      },
    });
  };

  function edit() {}

  return (
    <form
      onSubmit={handleSubmit(handleAddproduct)}
      className="flex flex-col items-center justify-cente space-y-2"
    >
      {/* <div className="grid grid-cols-1 lg:grid-cols-7 grid-rows-6 gap-20"> */}
      <div className="max-w-[500px] w-full">
        <Input
          type="text"
          placeholder="Enter product name"
          className="w-full h-12 focus:!ring-0 mb-2"
          {...register("title")}
        />
        {errors.title && <ErrorComponent message={errors.title.message} />}

        <Input
          type="number"
          placeholder="Enter product price"
          className="w-full h-12 focus:!ring-0 mb-2"
          {...register("price")}
        />
        {errors.price && <ErrorComponent message={errors.price?.message} />}

        <Textarea
          placeholder="Enter product description"
          className="w-full h-60 focus:!ring-0"
          {...register("description")}
        />
        {errors.description && (
          <ErrorComponent message={errors.description?.message} />
        )}
      </div>
      {/* <div className="col-span-3 row-span-6 w-full h-full">
          <ImageUpload />
        </div> */}
      {/* </div> */}
      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default AddProductComponent;
