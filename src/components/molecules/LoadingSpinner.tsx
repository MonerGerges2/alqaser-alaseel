import { Loader, Center } from "@mantine/core";
import React, { useEffect } from "react";

// Loading Spinner component
const LoadingSpinner = ({className}: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Center className={`h-screen ${className}`}>
      <Loader color="#0099A7" size="xl" variant="bars" />
    </Center>
  );
};

export default React.memo(LoadingSpinner);