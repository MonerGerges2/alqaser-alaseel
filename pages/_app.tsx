import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/organisms/Layout";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/utils/i18n";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utils/i18n";
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingSpinner from "@/component/mucles/LoadingSpinner";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [pageLoading, setPageLoading] = useState(false); // حالة التحميل أثناء التنقل

  const router = useRouter();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ar";
    i18n.changeLanguage(savedLanguage).then(() => {
      setLoading(false);
    });

    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const handleStart = () => setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  if (loading || !fontsLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>ALQASER ALASEEL</title>
        <meta name="description" content="Soft-Lap" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            {pageLoading && <LoadingSpinner />}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer />
          </MantineProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </>
  );
}
