import { Loader, Center } from "@mantine/core";
import React, { useEffect } from "react";

// Loading Spinner component
const LoadingSpinner = ({className}: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Center className={`h-screen w-full fixed ${className} bg-white dark:bg-black z-50 overflow-hidden`}>
      <Loader color="#eab308" size="xl" variant="bars" />
    </Center>
  );
};

export default React.memo(LoadingSpinner);