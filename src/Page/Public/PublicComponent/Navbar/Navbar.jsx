import React from "react";
import ComputerNav from "./ComputerNav";
import MobileNav from "./MobileNav";

export function MegaMenuWithPlacement() {
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

  return <div>{isWideScreen ? <ComputerNav /> : <MobileNav />}</div>;
}
