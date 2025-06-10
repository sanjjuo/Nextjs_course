import Footer from "@/components/common/Footer/footer";
import Navbar from "@/components/common/Navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="app-padding">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
