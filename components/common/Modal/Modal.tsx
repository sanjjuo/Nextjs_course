"use client";
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import Image from 'next/image';

const Modal = ({productDetails} : {productDetails: Product}) => {
     const [imageModal, setImageModal] = React.useState(productDetails.images[0])
    return (
        <Dialog defaultOpen>
            <DialogContent className="w-96">
                <DialogHeader>
                    <DialogTitle hidden />
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
                                {productDetails.images.length > 0 && productDetails.images?.filter((item) => item !== imageModal).map((image, index) => (
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
                        <p className="text-justify text-gray-600">{productDetails.description}</p>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
