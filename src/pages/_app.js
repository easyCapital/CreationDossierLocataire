import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/global/Layout/navbar";
import { useRouter } from "next/router";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/CreateStore";
import AuthProvider from "../providers/AuthProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import moment from "moment";
import "moment/locale/fr";
config.autoAddCss = false;
require("../styles/variables.less");
moment.locale("fr");
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  return (
    <Provider store={store}>
      <Navbar />
      <NextNProgress />
      <Head>
        <title>Passloc</title>
        <meta
          name="description"
          content="Créez votre dossier locataire propre et conforme en ligne pour trouver rapidement votre logement."
        />
        <link
          rel="canonical"
          href={
            (
              `https://www.passloc.fr` +
              (router.asPath === "/" ? "" : router.asPath)
            ).split("?")[0]
          }
        />
        <link rel="icon" href="../../passloc-logo-small.png" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
