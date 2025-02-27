import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.tsx";
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/global.css";
import "aos/dist/aos.css";

import "./utils/i18n.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </StrictMode>
  </QueryClientProvider>
);
