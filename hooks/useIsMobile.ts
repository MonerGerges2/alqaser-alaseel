import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1023) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if window width is less than or equal to the breakpoint
    const checkIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= breakpoint);
      }
    };

    // Initial check on component mount
    checkIsMobile();

    // Update on resize
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
