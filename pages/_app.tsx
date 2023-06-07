import React, { useState, useEffect } from "react";
import Router from "next/router";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Loading from "../components/loading";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Loading isLoading={loading} />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </>
  );
}

export default MyApp;
