import MainHeader from "@/components/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-screen-lg mx-auto p-4">
            <div className="flex flex-col items-center">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
