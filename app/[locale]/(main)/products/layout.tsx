import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
};

const ProductsLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      <div>{modal}</div>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
