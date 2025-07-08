import Footer from "@/components/common/Footer/footer";
import Navbar from "@/components/common/Navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full px-5 lg:p-0">
      <Navbar />
      <div className="min-h-[82.2vh] h-full app-padding">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
