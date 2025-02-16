import { Outlet } from "react-router-dom";
import Footer from "../Page/Public/PublicComponent/Footer/Footer";
import { MegaMenuWithPlacement } from "../Page/Public/PublicComponent/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen font-primary ">
      <div className="fixed top-0 left-0 w-full bg-natural z-50 shadow-md py-1  px-2">
        <MegaMenuWithPlacement />
      </div>
      <main className="pt-[90px] mb-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
