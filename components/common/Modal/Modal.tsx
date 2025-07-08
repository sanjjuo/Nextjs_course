"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({ productDetails }: { productDetails: Product }) => {
  const [imageModal, setImageModal] = React.useState(productDetails.images[0]);
  const router = useRouter();
  const placeOrder = () => router.push("/place_order");
  return (
    <Dialog defaultOpen>
      <DialogContent className="w-96">
        <DialogHeader>
          <DialogTitle hidden />
        </DialogHeader>
        <div className="flex flex-col justify-center mt-5 space-y-3">
          <div className="flex items-start gap-3 h-52 overflow-y-auto">
            <Image
              alt="image"
              src={imageModal}
              width={1001}
              height={100}
              className="w-full h-52 rounded-lg"
            />
            <div className="flex flex-col items-center gap-3">
              {productDetails.images.length > 0 &&
                productDetails.images
                  ?.filter((item) => item !== imageModal)
                  .map((image, index) => (
                    <Image
                      key={index}
                      alt="image"
                      src={image}
                      width={1000}
                      height={100}
                      onClick={() => setImageModal(image)}
                      className="w-full h-14 rounded-lg cursor-pointer hover:border-2 duration-300"
                    />
                  ))}
            </div>
          </div>
          <p className="text-black text-lg">{productDetails?.title}</p>
          <p className="text-justify text-gray-600">
            {productDetails.description}
          </p>
          <button onClick={placeOrder} className="app-btn !w-80">
            place order
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
