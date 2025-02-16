import React from "react";
import ComputerBookSidebar from "./ComputerBookSidebar";
import MobileBookSidebar from "./MobileBookSidebar";

const BooksSidebar = ({ searchByCategory }) => {
  const [isWideScreen, setIsWideScreen] = React.useState(
    window.innerWidth >= 960
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      {isWideScreen ? (
        <div className="">
          <ComputerBookSidebar searchByCategory={searchByCategory} />
        </div>
      ) : (
        <div className="">
          <MobileBookSidebar searchByCategory={searchByCategory} />
        </div>
      )}
    </div>
  );
};

export default BooksSidebar;
